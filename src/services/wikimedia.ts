import { cacheManager } from './cache';

export interface MediaFile {
  name: string;
  url: string;
  description: string;
  imageinfo?: {
    url: string;
    width: number;
    height: number;
  };
}

const WIKIMEDIA_API = 'https://commons.wikimedia.org/w/api.php';
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Search for images on Wikimedia Commons related to a topic
 */
export async function searchWikimediaImages(
  topic: string,
  limit: number = 5
): Promise<MediaFile[]> {
  try {
    const cacheKey = `wikimedia_${topic}_${limit}`;
    
    const cached = cacheManager.get<MediaFile[]>(cacheKey);
    if (cached) {
      return cached;
    }

    const searchParams = new URLSearchParams({
      action: 'query',
      list: 'allimages',
      aiprop: 'url|user',
      ailimit: limit.toString(),
      aifrom: topic,
      format: 'json',
      origin: '*',
    });

    const response = await fetch(`${WIKIMEDIA_API}?${searchParams}`, {
      headers: {
        'User-Agent': 'AI-Time-Machine (https://github.com/Sandeepa-git/ai-time-machine)',
      },
    });

    if (!response.ok) {
      console.warn(`Wikimedia API error: ${response.status}`);
      return [];
    }

    const data = await response.json();
    const images = data.query?.allimages || [];

    const results: MediaFile[] = images.map((img: any) => ({
      name: img.name,
      url: img.url,
      description: img.user || 'Unknown',
      imageinfo: {
        url: img.url,
        width: img.width || 0,
        height: img.height || 0,
      },
    }));

    cacheManager.set(cacheKey, results, CACHE_TTL);
    
    return results;
  } catch (error) {
    console.error('Error searching Wikimedia images:', error);
    return [];
  }
}

/**
 * Get image metadata from Wikimedia Commons
 */
export async function getWikimediaImageMetadata(fileName: string): Promise<MediaFile | null> {
  try {
    const cacheKey = `wikimedia_metadata_${fileName}`;
    
    const cached = cacheManager.get<MediaFile>(cacheKey);
    if (cached) {
      return cached;
    }

    const searchParams = new URLSearchParams({
      action: 'query',
      titles: `File:${fileName}`,
      prop: 'imageinfo',
      iiprop: 'url|dimensions|user',
      format: 'json',
      origin: '*',
    });

    const response = await fetch(`${WIKIMEDIA_API}?${searchParams}`, {
      headers: {
        'User-Agent': 'AI-Time-Machine (https://github.com/Sandeepa-git/ai-time-machine)',
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const pages = data.query?.pages || {};
    const page = Object.values(pages)[0] as any;

    if (!page || !page.imageinfo) {
      return null;
    }

    const imageinfo = page.imageinfo[0];
    const result: MediaFile = {
      name: page.title,
      url: imageinfo.url,
      description: page.user || 'Unknown',
      imageinfo: {
        url: imageinfo.url,
        width: imageinfo.width,
        height: imageinfo.height,
      },
    };

    cacheManager.set(cacheKey, result, CACHE_TTL);
    
    return result;
  } catch (error) {
    console.error('Error fetching Wikimedia image metadata:', error);
    return null;
  }
}

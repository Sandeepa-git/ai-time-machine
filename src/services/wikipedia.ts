import { cacheManager } from './cache';

export interface WikipediaExtract {
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  url: string;
}

const WIKIPEDIA_API = 'https://en.wikipedia.org/api/rest_v1/page/summary';
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Fetch Wikipedia summary for a historical topic
 */
export async function getWikipediaSummary(topic: string): Promise<WikipediaExtract | null> {
  try {
    const cacheKey = `wiki_${topic}`;
    
    // Check cache first
    const cached = cacheManager.get<WikipediaExtract>(cacheKey);
    if (cached) {
      return cached;
    }

    const response = await fetch(`${WIKIPEDIA_API}/${encodeURIComponent(topic)}`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'AI-Time-Machine (https://github.com/Sandeepa-git/ai-time-machine)',
      },
    });

    if (!response.ok) {
      console.warn(`Wikipedia API error for "${topic}": ${response.status}`);
      return null;
    }

    const data = await response.json();
    
    const result: WikipediaExtract = {
      title: data.title,
      extract: data.extract,
      thumbnail: data.thumbnail,
      url: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(topic)}`,
    };

    // Cache the result
    cacheManager.set(cacheKey, result, CACHE_TTL);
    
    return result;
  } catch (error) {
    console.error('Error fetching Wikipedia summary:', error);
    return null;
  }
}

/**
 * Fetch Wikipedia summaries for multiple topics
 */
export async function getWikipediaSummaries(topics: string[]): Promise<Map<string, WikipediaExtract>> {
  const results = new Map<string, WikipediaExtract>();

  for (const topic of topics) {
    try {
      const summary = await getWikipediaSummary(topic);
      if (summary) {
        results.set(topic, summary);
      }
    } catch (error) {
      console.error(`Failed to fetch Wikipedia for "${topic}":`, error);
    }
  }

  return results;
}

/**
 * Search for Wikipedia articles related to a query
 */
export async function searchWikipedia(query: string, limit: number = 5): Promise<string[]> {
  try {
    const cacheKey = `wiki_search_${query}`;
    
    const cached = cacheManager.get<string[]>(cacheKey);
    if (cached) {
      return cached;
    }

    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/search/page?q=${encodeURIComponent(query)}&limit=${limit}`,
      {
        headers: {
          'User-Agent': 'AI-Time-Machine (https://github.com/Sandeepa-git/ai-time-machine)',
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    const titles = data.pages?.map((page: any) => page.title) || [];
    
    cacheManager.set(cacheKey, titles, CACHE_TTL);
    
    return titles;
  } catch (error) {
    console.error('Error searching Wikipedia:', error);
    return [];
  }
}

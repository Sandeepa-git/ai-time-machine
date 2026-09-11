import { HistoricalPeriod } from './historical-data';
import { getWikipediaSummary, searchWikipedia } from '../services/wikipedia';
import { searchWikimediaImages } from '../services/wikimedia';
import { getEventsByCentury } from '../services/historicalEvents';

export interface ExtendedHistoricalPeriod extends HistoricalPeriod {
  wikipediaSummary?: string;
  images?: string[];
  events?: Array<{
    date: string;
    title: string;
    description: string;
  }>;
  references?: Array<{
    title: string;
    url: string;
  }>;
}

/**
 * Enrich historical period data with external sources
 */
export async function enrichHistoricalData(
  period: HistoricalPeriod
): Promise<ExtendedHistoricalPeriod> {
  const enriched: ExtendedHistoricalPeriod = { ...period };

  try {
    // Fetch Wikipedia summary for the era
    const wikipediaSummary = await getWikipediaSummary(period.era);
    if (wikipediaSummary) {
      enriched.wikipediaSummary = wikipediaSummary.extract;
      if (!enriched.references) {
        enriched.references = [];
      }
      enriched.references.push({
        title: wikipediaSummary.title,
        url: wikipediaSummary.url,
      });
    }

    // Fetch historical events for this period
    const events = await getEventsByCentury(period.year);
    if (events.length > 0) {
      enriched.events = events.map((e) => ({
        date: e.date,
        title: e.title,
        description: e.description,
      }));
    }

    // Fetch related Wikipedia articles for people mentioned
    if (period.people && period.people.length > 0) {
      const personSummaries = await Promise.all(
        period.people.slice(0, 2).map((person) => getWikipediaSummary(person))
      );

      personSummaries.forEach((summary) => {
        if (summary && enriched.references) {
          enriched.references.push({
            title: summary.title,
            url: summary.url,
          });
        }
      });
    }
  } catch (error) {
    console.error('Error enriching historical data:', error);
  }

  return enriched;
}

/**
 * Batch enrich multiple historical periods
 */
export async function enrichMultipleHistoricalPeriods(
  periods: HistoricalPeriod[]
): Promise<ExtendedHistoricalPeriod[]> {
  return Promise.all(periods.map((period) => enrichHistoricalData(period)));
}

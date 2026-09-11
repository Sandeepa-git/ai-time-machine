import { cacheManager } from './cache';

export interface HistoricalEvent {
  date: string;
  title: string;
  description: string;
  category: 'war' | 'science' | 'art' | 'technology' | 'politics' | 'culture' | 'exploration' | 'other';
  location?: string;
  source?: string;
  url?: string;
}

const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

// Comprehensive historical events database (3000 BC to 2026 AD)
const localHistoricalEvents: HistoricalEvent[] = [
  // Ancient Period (3000 BC - 500 BC)
  { date: '3000 BC', title: 'Egyptian Civilization Emerges', description: 'Upper and Lower Egypt unite under Narmer. Beginning of Old Kingdom and monumental architecture.', category: 'politics', location: 'Egypt' },
  { date: '2589 BC', title: 'Great Pyramid of Giza Construction', description: 'Construction of the Great Pyramid under Pharaoh Khufu, one of the Seven Wonders of the Ancient World.', category: 'science', location: 'Giza, Egypt' },
  { date: '1792 BC', title: 'Code of Hammurabi', description: 'King Hammurabi of Babylon creates the first comprehensive legal code, establishing "an eye for an eye" justice.', category: 'politics', location: 'Babylon' },
  { date: '1500 BC', title: 'Mycenaean Civilization Peak', description: 'Height of Mycenaean Greek civilization with palace complexes and trade networks.', category: 'culture', location: 'Greece' },
  { date: '1200 BC', title: 'Bronze Age Collapse', description: 'Major civilizations in the Eastern Mediterranean collapse; end of Bronze Age.', category: 'war', location: 'Mediterranean' },
  { date: '776 BC', title: 'First Ancient Olympic Games', description: 'The first recorded Ancient Olympic Games are held at Olympia, establishing a four-year cycle.', category: 'culture', location: 'Olympia, Greece' },
  { date: '753 BC', title: 'Founding of Rome', description: 'According to tradition, Rome is founded by Romulus on the Palatine Hill.', category: 'politics', location: 'Rome' },
  { date: '508 BC', title: 'Athenian Democracy Established', description: 'Cleisthenes establishes democratic reforms in Athens, creating the foundation for Western democracy.', category: 'politics', location: 'Athens' },
  
  // Classical Period (500 BC - 500 AD)
  { date: '490 BC', title: 'Battle of Marathon', description: 'Athenian forces defeat the invading Persian army, marking a turning point in Greek history.', category: 'war', location: 'Marathon, Greece' },
  { date: '431 BC', title: 'Peloponnesian War Begins', description: 'Conflict between Athens and Sparta begins, lasting 27 years and reshaping the Greek world.', category: 'war', location: 'Greece' },
  { date: '387 BC', title: 'Plato Founds Academy', description: 'Plato establishes the Academy in Athens, one of the earliest institutions of higher learning in the Western world.', category: 'science', location: 'Athens' },
  { date: '336 BC', title: 'Alexander the Great Becomes King', description: 'Alexander III of Macedon begins his reign and starts building one of history\'s greatest empires.', category: 'politics', location: 'Macedon' },
  { date: '27 BC', title: 'Augustus Becomes First Roman Emperor', description: 'Octavian receives the title "Augustus" and becomes the first Roman Emperor, beginning the Imperial period.', category: 'politics', location: 'Rome' },
  { date: '100 AD', title: 'Han Dynasty Peak', description: 'Chinese Han Dynasty reaches its height of power and prosperity.', category: 'politics', location: 'China' },
  { date: '285 AD', title: 'Roman Empire Divided', description: 'Emperor Diocletian divides the Roman Empire into Eastern and Western halves.', category: 'politics', location: 'Rome' },
  { date: '410 AD', title: 'Visigoth Sack of Rome', description: 'Alaric and the Visigoths sack Rome, a symbolic end to Roman power in the West.', category: 'war', location: 'Rome' },
  { date: '476 AD', title: 'Fall of Western Roman Empire', description: 'Romulus Augustulus, the last Western Roman Emperor, is deposed, marking the traditional end of the Western Roman Empire.', category: 'politics', location: 'Rome' },
  
  // Medieval Period (500 - 1450)
  { date: '622 AD', title: 'Islamic Calendar Begins', description: 'Prophet Muhammad\'s Hijra to Medina; founding event of Islam. Islamic calendar begins.', category: 'culture', location: 'Arabia' },
  { date: '800 AD', title: 'Charlemagne Crowned Emperor', description: 'Charlemagne is crowned Emperor of the Romans by Pope Leo III, founding the Carolingian Empire.', category: 'politics', location: 'Rome' },
  { date: '1066 AD', title: 'Norman Conquest of England', description: 'William the Conqueror defeats King Harold at the Battle of Hastings, becoming King of England.', category: 'war', location: 'Hastings, England' },
  { date: '1096 AD', title: 'First Crusade Launched', description: 'Pope Urban II calls for the First Crusade to reclaim the Holy Land, beginning centuries of crusades.', category: 'war', location: 'Levant' },
  { date: '1215 AD', title: 'Magna Carta Signed', description: 'English barons force King John to sign Magna Carta, establishing the principle that rulers are subject to law.', category: 'politics', location: 'England' },
  { date: '1347 AD', title: 'Black Death Arrives in Europe', description: 'The bubonic plague reaches Europe, eventually killing one-third of the European population.', category: 'other', location: 'Europe' },
  { date: '1440 AD', title: 'Printing Press Invented', description: 'Johannes Gutenberg invents the movable type printing press, revolutionizing the spread of information.', category: 'technology', location: 'Mainz, Germany' },
  
  // Renaissance & Early Modern (1450 - 1750)
  { date: '1453 AD', title: 'Fall of Constantinople', description: 'Ottoman forces capture Constantinople, ending the Byzantine Empire and spreading Greek scholars to Western Europe.', category: 'war', location: 'Constantinople' },
  { date: '1492 AD', title: 'Columbus Reaches the Americas', description: 'Christopher Columbus reaches the Caribbean, initiating sustained European contact with the Americas.', category: 'exploration', location: 'Atlantic Ocean' },
  { date: '1517 AD', title: 'Martin Luther\'s 95 Theses', description: 'Martin Luther posts his 95 Theses, sparking the Protestant Reformation and splitting Western Christianity.', category: 'culture', location: 'Germany' },
  { date: '1543 AD', title: 'Copernican Revolution Begins', description: 'Nicolaus Copernicus publishes his heliocentric theory, challenging the geocentric worldview.', category: 'science', location: 'Poland' },
  { date: '1588 AD', title: 'Spanish Armada Defeated', description: 'English Navy defeats the Spanish Armada, establishing England as a major naval power and protecting Protestantism.', category: 'war', location: 'English Channel' },
  { date: '1610 AD', title: 'Galileo Observes Jupiter', description: 'Galileo Galilei uses his telescope to observe Jupiter and discover its four largest moons, supporting heliocentrism.', category: 'science', location: 'Padua, Italy' },
  { date: '1687 AD', title: 'Newton\'s Principia Published', description: 'Isaac Newton publishes "Philosophiæ Naturalis Principia Mathematica," laying the foundation for classical physics.', category: 'science', location: 'London, England' },
  
  // Enlightenment & Industrial Revolution (1750 - 1850)
  { date: '1762 AD', title: 'Rousseau\'s Social Contract', description: 'Jean-Jacques Rousseau publishes "The Social Contract," influencing democratic thought and revolutions.', category: 'culture', location: 'France' },
  { date: '1769 AD', title: 'Steam Engine Improved', description: 'James Watt patents an improved steam engine, becoming a key technology for the Industrial Revolution.', category: 'technology', location: 'Scotland' },
  { date: '1776 AD', title: 'American Declaration of Independence', description: 'Thirteen American colonies declare independence from British rule, founding the United States of America.', category: 'politics', location: 'Philadelphia, USA' },
  { date: '1789 AD', title: 'French Revolution Begins', description: 'Storming of the Bastille marks the beginning of the French Revolution, reshaping European society and politics.', category: 'politics', location: 'Paris, France' },
  { date: '1804 AD', title: 'Napoleon Becomes Emperor', description: 'Napoleon Bonaparte crowns himself Emperor of France and begins his military campaigns across Europe.', category: 'politics', location: 'Paris, France' },
  { date: '1859 AD', title: 'Darwin\'s Origin of Species', description: 'Charles Darwin publishes "On the Origin of Species," introducing the theory of evolution by natural selection.', category: 'science', location: 'London, England' },
  
  // Modern Era (1850 - 1945)
  { date: '1876 AD', title: 'Telephone Invented', description: 'Alexander Graham Bell patents the telephone, revolutionizing long-distance communication.', category: 'technology', location: 'Boston, USA' },
  { date: '1903 AD', title: 'Wright Brothers\' Flight', description: 'Orville and Wilbur Wright achieve the first powered, controlled, sustained heavier-than-air flight.', category: 'technology', location: 'North Carolina, USA' },
  { date: '1914 AD', title: 'World War I Begins', description: 'Assassination of Archduke Franz Ferdinand triggers the beginning of World War I, lasting four years.', category: 'war', location: 'Europe' },
  { date: '1920 AD', title: 'Roaring Twenties Begin', description: 'Post-WWI era of prosperity, jazz, and cultural revolution begins in North America and Europe.', category: 'culture', location: 'North America & Europe' },
  { date: '1929 AD', title: 'Great Depression Begins', description: 'Stock market crash on Black Tuesday triggers the Great Depression, a worldwide economic catastrophe.', category: 'other', location: 'USA' },
  { date: '1939 AD', title: 'World War II Begins', description: 'Nazi Germany invades Poland, triggering World War II, the deadliest conflict in human history.', category: 'war', location: 'Europe' },
  { date: '1945 AD', title: 'World War II Ends', description: 'Germany surrenders in May; Japan surrenders in August after atomic bombings. UN is established.', category: 'war', location: 'Global' },
  
  // Contemporary Era (1945 - Present)
  { date: '1947 AD', title: 'Indian Independence', description: 'India gains independence from British rule under Mahatma Gandhi\'s leadership.', category: 'politics', location: 'India' },
  { date: '1949 AD', title: 'Communist China Established', description: 'Mao Zedong proclaims the People\'s Republic of China, ending the Chinese Civil War.', category: 'politics', location: 'China' },
  { date: '1969 AD', title: 'Apollo 11 Moon Landing', description: 'Apollo 11 successfully lands on the Moon. Neil Armstrong becomes the first human to walk on lunar surface.', category: 'exploration', location: 'Moon' },
  { date: '1989 AD', title: 'Fall of the Berlin Wall', description: 'The Berlin Wall falls, symbolizing the end of the Cold War and the beginning of German reunification.', category: 'politics', location: 'Berlin, Germany' },
  { date: '1989 AD', title: 'World Wide Web Invented', description: 'Tim Berners-Lee invents the World Wide Web while working at CERN, creating the foundation for the modern internet.', category: 'technology', location: 'Geneva, Switzerland' },
  { date: '1991 AD', title: 'Fall of Soviet Union', description: 'The Soviet Union officially dissolves, ending the Cold War era and reshaping global politics.', category: 'politics', location: 'Russia' },
  { date: '1994 AD', title: 'World Wide Web Goes Public', description: 'The World Wide Web becomes publicly accessible, leading to rapid global internet adoption.', category: 'technology', location: 'Global' },
  { date: '2001 AD', title: 'First Smartphone Released', description: 'The PalmPilot introduces smartphone technology, leading to the mobile revolution.', category: 'technology', location: 'USA' },
  { date: '2004 AD', title: 'Facebook Founded', description: 'Mark Zuckerberg founds Facebook, revolutionizing social networking and communications.', category: 'technology', location: 'Cambridge, USA' },
  { date: '2007 AD', title: 'iPhone Released', description: 'Apple releases the iPhone, revolutionizing mobile computing and launching the smartphone era.', category: 'technology', location: 'USA' },
  { date: '2011 AD', title: 'Arab Spring Begins', description: 'Series of pro-democracy uprisings and armed rebellions spread across the Arab world.', category: 'politics', location: 'Middle East & North Africa' },
  { date: '2020 AD', title: 'COVID-19 Pandemic', description: 'Global COVID-19 pandemic begins, affecting billions and reshaping society, economy, and politics worldwide.', category: 'other', location: 'Global' },
];

/**
 * Get historical events by century
 */
export async function getEventsByCentury(year: number): Promise<HistoricalEvent[]> {
  try {
    const century = Math.floor(year / 100) * 100;
    const cacheKey = `events_century_${century}`;
    
    const cached = cacheManager.get<HistoricalEvent[]>(cacheKey);
    if (cached) {
      return cached;
    }

    // Filter local events for the given century
    const events = localHistoricalEvents.filter((event) => {
      const eventYear = parseInt(event.date);
      return eventYear >= century && eventYear < century + 100;
    });

    cacheManager.set(cacheKey, events, CACHE_TTL);
    
    return events;
  } catch (error) {
    console.error('Error fetching events by century:', error);
    return [];
  }
}

/**
 * Get historical events by category
 */
export async function getEventsByCategory(category: HistoricalEvent['category']): Promise<HistoricalEvent[]> {
  try {
    const cacheKey = `events_category_${category}`;
    
    const cached = cacheManager.get<HistoricalEvent[]>(cacheKey);
    if (cached) {
      return cached;
    }

    const events = localHistoricalEvents.filter((event) => event.category === category);

    cacheManager.set(cacheKey, events, CACHE_TTL);
    
    return events;
  } catch (error) {
    console.error('Error fetching events by category:', error);
    return [];
  }
}

/**
 * Get all historical events
 */
export async function getAllHistoricalEvents(): Promise<HistoricalEvent[]> {
  try {
    const cacheKey = 'events_all';
    
    const cached = cacheManager.get<HistoricalEvent[]>(cacheKey);
    if (cached) {
      return cached;
    }

    cacheManager.set(cacheKey, localHistoricalEvents, CACHE_TTL);
    
    return localHistoricalEvents;
  } catch (error) {
    console.error('Error fetching all historical events:', error);
    return [];
  }
}

/**
 * Add a new historical event
 */
export function addHistoricalEvent(event: HistoricalEvent): void {
  localHistoricalEvents.push(event);
  // Clear the cache to reflect the new data
  cacheManager.delete('events_all');
}

/**
 * Search events by keyword
 */
export async function searchEvents(keyword: string): Promise<HistoricalEvent[]> {
  try {
    const cacheKey = `events_search_${keyword.toLowerCase()}`;
    
    const cached = cacheManager.get<HistoricalEvent[]>(cacheKey);
    if (cached) {
      return cached;
    }

    const lowerKeyword = keyword.toLowerCase();
    const results = localHistoricalEvents.filter((event) =>
      event.title.toLowerCase().includes(lowerKeyword) ||
      event.description.toLowerCase().includes(lowerKeyword) ||
      event.location?.toLowerCase().includes(lowerKeyword)
    );

    cacheManager.set(cacheKey, results, CACHE_TTL);
    
    return results;
  } catch (error) {
    console.error('Error searching events:', error);
    return [];
  }
}

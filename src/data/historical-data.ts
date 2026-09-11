// Historical data for the time machine
export interface HistoricalPeriod {
  year: number;
  era: string;
  location: string;
  description: string;
  people: string[];
  events: string[];
  technology: string[];
  facts: string[];
  image: string;
  color: string;
}

export const historicalData: HistoricalPeriod[] = [
  {
    year: -3000,
    era: "Ancient Egypt",
    location: "Nile Valley, Northeast Africa",
    description: "The dawn of Egyptian civilization. The Great Pyramids stand as monuments to pharaonic power and architectural genius.",
    people: ["Khufu", "Khafre", "Menkaure", "Imhotep"],
    events: [
      "Construction of the Great Pyramid of Giza",
      "Unification of Upper and Lower Egypt",
      "Development of hieroglyphic writing",
      "Birth of Egyptian mathematical systems"
    ],
    technology: [
      "Stone cutting and masonry",
      "Papyrus paper",
      "Bronze tools",
      "Irrigation systems",
      "Limestone quarrying"
    ],
    facts: [
      "The Great Pyramid took 20 years and 100,000 workers to build",
      "Egyptian pyramids were built with precision that rivals modern engineering",
      "The Nile River flooded predictably, enabling agricultural planning",
      "Egyptians were among the first to develop a 365-day calendar"
    ],
    image: "🔺",
    color: "from-amber-900 to-yellow-700"
  },
  {
    year: -2500,
    era: "Indus Valley Civilization",
    location: "Indus River Valley, South Asia",
    description: "One of the world's earliest urban civilizations. Advanced city planning and drainage systems showcase remarkable engineering prowess.",
    people: ["Harappa", "Mohenjo-daro", "Unknown Rulers", "Merchant Classes"],
    events: [
      "Urban planning and city development",
      "Standardized weights and measures",
      "Trade networks established",
      "Seals and writing systems developed",
      "Agricultural settlements flourish"
    ],
    technology: [
      "Standardized bricks",
      "Underground drainage systems",
      "Weights and measures",
      "Terracotta seals",
      "Advanced irrigation"
    ],
    facts: [
      "Indus Valley cities had a grid-like street layout centuries before Rome",
      "The civilization covered over 1 million square kilometers",
      "Their writing system remains undeciphered to this day",
      "They had standardized weights accurate to 0.1 gram"
    ],
    image: "🏘️",
    color: "from-orange-900 to-amber-700"
  },
  {
    year: -1500,
    era: "Shang Dynasty",
    location: "Yellow River Valley, China",
    description: "China's first confirmed dynastic civilization. Bronze metallurgy and oracle bone script reveal an advanced society.",
    people: ["King Tang", "Lady Hao", "Oracle priests", "Bronze craftsmen"],
    events: [
      "Development of oracle bone script",
      "Bronze technology advancement",
      "Agricultural expansion",
      "Ritual and religious ceremonies",
      "Warfare and territorial expansion"
    ],
    technology: [
      "Bronze casting",
      "Oracle bones",
      "Chariots",
      "Agricultural tools",
      "Pottery techniques"
    ],
    facts: [
      "Oracle bones were used to predict the future and record events",
      "The Shang developed one of the world's oldest writing systems",
      "Chariots gave the Shang a military advantage",
      "Shang bronze work remains unmatched in quality for centuries"
    ],
    image: "🏯",
    color: "from-red-900 to-yellow-800"
  },
  {
    year: -900,
    era: "Vedic Age (India)",
    location: "Indian Subcontinent",
    description: "The age of sacred Vedas and Rig-vedic society. Foundation of Hindu philosophy and social structures established.",
    people: ["Vedic Rishis", "Arjuna", "Indra", "Agni"],
    events: [
      "Composition of the four Vedas",
      "Vedic rituals and ceremonies",
      "Caste system foundation",
      "Agricultural society development",
      "Sanskrit language evolution"
    ],
    technology: [
      "Vedic astronomy",
      "Ritual knowledge",
      "Agricultural techniques",
      "Metallurgy",
      "Ayurvedic medicine foundations"
    ],
    facts: [
      "The Vedas are among the oldest sacred texts still in use",
      "Vedic mathematics was remarkably advanced for its time",
      "Sanskrit is one of the oldest Indo-European languages",
      "The Vedic period shaped the foundation of Indian civilization"
    ],
    image: "🕉️",
    color: "from-orange-900 to-red-800"
  },
  {
    year: -450,
    era: "Ancient Greece (Classical Period)",
    location: "Athens and Greek City-States",
    description: "The golden age of Greek civilization. Democracy, philosophy, and art flourish in the heart of Athens.",
    people: ["Pericles", "Socrates", "Plato", "Aristotle", "Phidias"],
    events: [
      "Construction of the Parthenon",
      "The Golden Age of Pericles",
      "Development of democratic governance",
      "Birth of Western philosophy",
      "Olympic Games flourish"
    ],
    technology: [
      "Greek architecture and columns",
      "Bronze casting",
      "Marble sculpting",
      "Siege warfare equipment",
      "Astronomical instruments"
    ],
    facts: [
      "The Parthenon contains no straight lines - all columns curve slightly",
      "Ancient Greeks invented the water clock (clepsydra)",
      "Democracy in Athens allowed all male citizens to vote",
      "The Olympic Games were held every 4 years for over 1,000 years"
    ],
    image: "🏛️",
    color: "from-blue-900 to-cyan-700"
  },
  {
    year: -221,
    era: "Qin Dynasty (China)",
    location: "Ancient China",
    description: "China's first unified empire. The Great Wall is built and the Terracotta Army created to protect the emperor in the afterlife.",
    people: ["Qin Shi Huang", "Li Si", "General Meng Tian"],
    events: [
      "Unification of China",
      "Construction of the Great Wall",
      "Creation of Terracotta Army",
      "Standardization of weights and measures",
      "Book burning and thought control"
    ],
    technology: [
      "Great Wall fortification",
      "Terracotta sculptures",
      "Standardized measurements",
      "Military innovations",
      "Road systems"
    ],
    facts: [
      "The Terracotta Army contains 8,000 life-sized warriors",
      "Qin Shi Huang connected earlier walls to create the Great Wall",
      "The Qin Dynasty only lasted 15 years but shaped Chinese civilization",
      "Standardization made trade and administration efficient"
    ],
    image: "🏯",
    color: "from-yellow-900 to-orange-800"
  },
  {
    year: -50,
    era: "Ancient Rome (Imperial Period)",
    location: "Roman Empire, Europe & Mediterranean",
    description: "Rome at its height. A vast empire connected by roads, law, and engineering marvels. The Colosseum stands as a symbol of Roman power.",
    people: ["Augustus", "Marcus Aurelius", "Nero", "Trajan", "Julius Caesar"],
    events: [
      "Construction of the Colosseum",
      "Expansion of the Roman Empire",
      "Development of Roman law",
      "Construction of the Pantheon",
      "Roman roads connect the empire"
    ],
    technology: [
      "Roman concrete (opus caementicium)",
      "Aqueducts and water systems",
      "Road construction",
      "Military engineering",
      "Architectural innovations"
    ],
    facts: [
      "Roman concrete is stronger than modern concrete and lasts longer",
      "The Colosseum could hold 50,000-80,000 spectators",
      "Roman roads were so well-built that many still exist today",
      "The Roman postal system could deliver messages across the empire in weeks"
    ],
    image: "🏛️",
    color: "from-red-900 to-orange-700"
  },
  {
    year: 632,
    era: "Islamic Golden Age (Early)",
    location: "Middle East & Mediterranean",
    description: "The birth of Islamic civilization. Knowledge, astronomy, and mathematics flourish under new religious inspiration.",
    people: ["Prophet Muhammad", "Abu Bakr", "Umar ibn al-Khattab", "Ali ibn Abi Talib"],
    events: [
      "Founding of Islam",
      "Rapid Islamic expansion",
      "Foundation of Islamic law (Sharia)",
      "Translation movement begins",
      "Arabic alphabet becomes standard"
    ],
    technology: [
      "Advanced astronomy",
      "Mathematical innovations",
      "Medical knowledge",
      "Navigation instruments",
      "Architectural marvels"
    ],
    facts: [
      "Islamic scholars preserved Greek and Roman knowledge",
      "The Islamic world developed advanced mathematics and algorithms",
      "Hospitals in the Islamic world were centuries ahead of Europe",
      "Arabic numerals revolutionized mathematics worldwide"
    ],
    image: "🕌",
    color: "from-green-900 to-emerald-700"
  },
  {
    year: 1066,
    era: "Norman Conquest of England",
    location: "England and Normandy",
    description: "William the Conqueror defeats the Anglo-Saxon King Harold. A pivotal moment that transforms English language and culture.",
    people: ["William the Conqueror", "Harold Godwinson", "Normans", "Anglo-Saxons"],
    events: [
      "Battle of Hastings",
      "Norman takeover of England",
      "Feudal system established",
      "Norman castles built",
      "Language and culture merge"
    ],
    technology: [
      "Medieval military tactics",
      "Castle fortification",
      "Norman architecture",
      "Weapons technology",
      "Agricultural methods"
    ],
    facts: [
      "The Norman Conquest changed English language forever",
      "Over 30% of English words have French origins from this era",
      "The Bayeux Tapestry documents the conquest in remarkable detail",
      "This conquest directly led to English common law"
    ],
    image: "⚔️",
    color: "from-slate-900 to-gray-700"
  },
  {
    year: 1200,
    era: "Medieval Europe (High Middle Ages)",
    location: "European Kingdoms, England, France, Holy Roman Empire",
    description: "An age of knights, castles, and feudalism. The Church holds great power. Gothic architecture begins to transform the European landscape.",
    people: ["King Richard the Lionheart", "Charlemagne", "Eleanor of Aquitaine", "Thomas Aquinas", "Dante Alighieri"],
    events: [
      "Construction of Gothic cathedrals",
      "The Crusades to the Holy Land",
      "The feudal system governs society",
      "Medieval universities emerge",
      "Illuminated manuscripts flourish"
    ],
    technology: [
      "Gothic architecture",
      "Heavy cavalry and armor",
      "Illuminated manuscript creation",
      "Stone masonry and vaulting",
      "Medieval weaponry"
    ],
    facts: [
      "Gothic cathedrals took over 100 years to build",
      "Medieval knights required years of training starting in childhood",
      "The feudal system created a complex hierarchy of lords and vassals",
      "Illuminated manuscripts were copied by hand by monks"
    ],
    image: "🏰",
    color: "from-purple-900 to-pink-700"
  },
  {
    year: 1368,
    era: "Ming Dynasty (Early)",
    location: "China",
    description: "China's restoration after Mongol rule. The Great Wall is rebuilt and the Forbidden City is constructed as a symbol of imperial power.",
    people: ["Zhu Yuanzhang", "Yongle Emperor", "Admiral Zheng He"],
    events: [
      "End of Mongol rule",
      "Construction of Forbidden City",
      "Rebuilding of Great Wall",
      "Maritime expeditions begin",
      "Porcelain and silk production peak"
    ],
    technology: [
      "Advanced porcelain",
      "Wooden shipbuilding",
      "Navigation technology",
      "Gunpowder weapons",
      "Architectural innovations"
    ],
    facts: [
      "The Forbidden City has 999 buildings (considered the most perfect number)",
      "Ming porcelain is still highly valued by collectors worldwide",
      "Zheng He led massive treasure voyages across the Indian Ocean",
      "The Ming rebuilt the Great Wall to its most recognizable form"
    ],
    image: "🏯",
    color: "from-red-900 to-yellow-700"
  },
  {
    year: 1450,
    era: "Renaissance (Early)",
    location: "Italy, Florence, Venice, Rome",
    description: "A rebirth of classical knowledge and human potential. Art, science, and humanism flourish. The printing press revolutionizes knowledge sharing.",
    people: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Brunelleschi", "Gutenberg"],
    events: [
      "Invention of the printing press",
      "Rediscovery of classical texts",
      "Patronage system supports artists",
      "Perspective and anatomy revolutionize art",
      "Humanism emphasizes human potential"
    ],
    technology: [
      "Movable type printing press",
      "Oil painting techniques",
      "Linear perspective",
      "Anatomical studies",
      "Mechanical clocks"
    ],
    facts: [
      "The printing press increased literacy and changed society forever",
      "Leonardo da Vinci was an artist, scientist, engineer, and anatomist",
      "Michelangelo spent 4 years painting the Sistine Chapel ceiling",
      "Renaissance artists studied human anatomy through dissection"
    ],
    image: "🎨",
    color: "from-rose-900 to-red-700"
  },
  {
    year: 1543,
    era: "Scientific Revolution (Early)",
    location: "Europe",
    description: "The heliocentric theory challenges the Church's geocentric worldview. Copernicus and Vesalius revolutionize science and anatomy.",
    people: ["Copernicus", "Andreas Vesalius", "Tycho Brahe", "Giordano Bruno"],
    events: [
      "Copernicus publishes heliocentric theory",
      "Vesalius advances anatomy",
      "Telescopes invented",
      "Challenge to religious dogma",
      "Scientific method emerges"
    ],
    technology: [
      "Improved astronomical instruments",
      "Anatomical illustrations",
      "Telescope development",
      "Printing press",
      "Mathematical advances"
    ],
    facts: [
      "Copernicus's theory took decades to gain acceptance",
      "Vesalius's anatomical illustrations were revolutionary",
      "Giordano Bruno was burned at the stake for his beliefs",
      "This period set the foundation for modern science"
    ],
    image: "🔭",
    color: "from-indigo-900 to-purple-700"
  },
  {
    year: 1600,
    era: "Scientific Revolution",
    location: "Europe, Italy, England, France",
    description: "The old worldview shatters. Science emerges as a way to understand nature. Telescopes reveal new worlds. The heliocentric model challenges tradition.",
    people: ["Galileo Galilei", "Isaac Newton", "Johannes Kepler", "René Descartes", "Francis Bacon"],
    events: [
      "Galileo turns telescope to the sky",
      "Newton develops laws of motion and gravity",
      "Kepler discovers laws of planetary motion",
      "The scientific method emerges",
      "Scientific societies are founded"
    ],
    technology: [
      "Telescope",
      "Microscope",
      "Thermometer",
      "Barometer",
      "Mathematical notation"
    ],
    facts: [
      "Galileo discovered Jupiter's four largest moons in 1610",
      "Newton's Principia Mathematica laid the foundation for classical physics",
      "The scientific method requires observation, hypothesis, and experimentation",
      "Scientific societies like the Royal Society revolutionized knowledge sharing"
    ],
    image: "🔭",
    color: "from-indigo-900 to-blue-700"
  },
  {
    year: 1750,
    era: "Age of Enlightenment",
    location: "Europe, France, England, Germany",
    description: "Reason, logic, and science guide society. Philosophers challenge authority and promote individual rights, liberty, and democracy.",
    people: ["Voltaire", "Jean-Jacques Rousseau", "John Locke", "Denis Diderot", "David Hume"],
    events: [
      "Publication of the Encyclopédie",
      "Salons become centers of intellectual discourse",
      "Political philosophy reshapes government",
      "Science becomes the standard for knowledge",
      "Individual rights are championed"
    ],
    technology: [
      "Printing press innovations",
      "Encyclopedia production",
      "Steam engine development begins",
      "Improved scientific instruments",
      "Agricultural innovations"
    ],
    facts: [
      "Voltaire's writings influenced revolutions across Europe and America",
      "The Encyclopédie contained over 70,000 articles and took 20 years to complete",
      "Enlightenment ideas directly influenced the American Revolution",
      "Reason and science replaced superstition in intellectual circles"
    ],
    image: "💡",
    color: "from-yellow-900 to-amber-600"
  },
  {
    year: 1859,
    era: "Industrial Revolution Peak",
    location: "Britain, Europe, North America",
    description: "Darwin publishes Evolution while steam power transforms society. Railroads, telegraphs, and factories reshape the world.",
    people: ["Charles Darwin", "Charles Dickens", "Florence Nightingale", "Thomas Edison"],
    events: [
      "Darwin publishes 'On the Origin of Species'",
      "Telegraph revolutionizes communication",
      "Railway expansion accelerates",
      "Factory system dominates labor",
      "Urban industrial cities emerge"
    ],
    technology: [
      "Steam power",
      "Railway networks",
      "Telegraph technology",
      "Factory machinery",
      "Steel production"
    ],
    facts: [
      "Darwin's theory revolutionized our understanding of life",
      "The telegraph could transmit messages across continents instantly",
      "Railways reduced journey times from weeks to days",
      "Industrial pollution created the first environmental crisis"
    ],
    image: "🔬",
    color: "from-gray-900 to-slate-700"
  },
  {
    year: 1912,
    era: "Age of Aviation",
    location: "Global",
    description: "The Titanic sinks, airplanes take flight, and the world stands on the edge of unprecedented change and warfare.",
    people: ["Wright Brothers", "Captain Smith", "Wilbur Wright", "Orville Wright"],
    events: [
      "Titanic sinks in Atlantic",
      "Commercial aviation emerges",
      "Transatlantic communication",
      "Pre-World War I tensions",
      "Industrial production peaks"
    ],
    technology: [
      "Powered flight",
      "Radio communication",
      "Ocean liners",
      "Automotive technology",
      "Electrical systems"
    ],
    facts: [
      "The Titanic was considered 'unsinkable' but struck an iceberg",
      "The Wright Brothers achieved powered flight in 1903",
      "Commercial aviation would transform global connectivity",
      "This era marked the peak of industrial optimism before WWI"
    ],
    image: "✈️",
    color: "from-blue-900 to-cyan-700"
  },
  {
    year: 1945,
    era: "Post-World War II Era",
    location: "Global",
    description: "World War II ends. Nuclear age dawns. The modern world is born from the ashes. Cold War tensions begin.",
    people: ["Harry Truman", "Winston Churchill", "Albert Einstein", "J. Robert Oppenheimer"],
    events: [
      "Atomic bombs dropped on Japan",
      "End of World War II",
      "United Nations founded",
      "Nuclear age begins",
      "Cold War emerges"
    ],
    technology: [
      "Atomic bomb",
      "Nuclear energy",
      "Radar technology",
      "Jet engines",
      "Computer development"
    ],
    facts: [
      "The atomic bomb changed warfare and geopolitics forever",
      "Nuclear energy promised unlimited power",
      "The United Nations was established to prevent future wars",
      "The Cold War would dominate the next 46 years"
    ],
    image: "☢️",
    color: "from-red-900 to-orange-800"
  },
  {
    year: 1969,
    era: "Space Age & Digital Dawn",
    location: "Earth & Moon, Global",
    description: "Humanity touches the moon. Computers begin to change everything. Information spreads instantly. A new era of possibilities opens.",
    people: ["Neil Armstrong", "Buzz Aldrin", "Steve Jobs", "Bill Gates", "Grace Hopper"],
    events: [
      "Apollo 11 moon landing",
      "First computer networks emerge",
      "Integrated circuits revolutionize electronics",
      "Transistor radios become ubiquitous",
      "Global satellite communications begin"
    ],
    technology: [
      "Apollo spacecraft",
      "Integrated circuits",
      "Early computers",
      "Satellite technology",
      "Digital transistors"
    ],
    facts: [
      "Apollo 11 put humans on the moon in 1969, just 66 years after powered flight",
      "The first integrated circuit had 3 transistors; modern ones have billions",
      "ARPANET, the predecessor to the internet, was established in 1969",
      "The moon landing was watched by over 600 million people worldwide"
    ],
    image: "🚀",
    color: "from-sky-900 to-cyan-700"
  },
  {
    year: 1989,
    era: "Digital Revolution",
    location: "Global",
    description: "The Berlin Wall falls. The World Wide Web is invented. Personal computers revolutionize daily life. The internet age begins.",
    people: ["Tim Berners-Lee", "Linus Torvalds", "Steve Jobs", "Bill Gates"],
    events: [
      "Fall of Berlin Wall",
      "World Wide Web invented",
      "Personal computers widespread",
      "End of Cold War begins",
      "Internet revolution starts"
    ],
    technology: [
      "World Wide Web",
      "Personal computers",
      "Mobile phones emerge",
      "Graphical user interfaces",
      "Digital networks"
    ],
    facts: [
      "Tim Berners-Lee invented the WWW at CERN",
      "The fall of the Berlin Wall symbolized the end of Cold War",
      "Personal computers became affordable for everyday people",
      "The internet would transform global communication forever"
    ],
    image: "💻",
    color: "from-green-900 to-emerald-700"
  },
  {
    year: 2008,
    era: "Modern Digital Age",
    location: "Global",
    description: "Smartphones, social media, and cloud computing transform society. A global financial crisis reshapes economies. The digital age matures.",
    people: ["Steve Jobs", "Mark Zuckerberg", "Sergey Brin", "Larry Page"],
    events: [
      "iPhone revolutionizes mobile technology",
      "Global financial crisis begins",
      "Social media transforms communication",
      "Cloud computing emerges",
      "Streaming services begin"
    ],
    technology: [
      "Smartphones",
      "Cloud computing",
      "Social media platforms",
      "Artificial intelligence begins",
      "Streaming technology"
    ],
    facts: [
      "The iPhone created the modern smartphone era",
      "Social media connected billions of people worldwide",
      "Cloud computing enables on-demand computing power",
      "Artificial intelligence begins to influence daily life"
    ],
    image: "📱",
    color: "from-violet-900 to-purple-700"
  }
];

export function findNearestHistoricalPeriod(year: number): HistoricalPeriod {
  const sorted = [...historicalData].sort(
    (a, b) => Math.abs(a.year - year) - Math.abs(b.year - year)
  );
  return sorted[0];
}

export function validateYear(year: string): { valid: boolean; error?: string } {
  const input = year.trim().toUpperCase();
  
  // Handle BC/AD notation
  let parsedYear: number;
  
  if (input.includes('BC') || input.includes('B.C.')) {
    // Parse BC years
    const numStr = input.replace(/BC|B\.C\.|AD|A\.D\./g, '').trim();
    parsedYear = -parseInt(numStr, 10);
  } else if (input.includes('AD') || input.includes('A.D.')) {
    // Parse AD years
    const numStr = input.replace(/BC|B\.C\.|AD|A\.D\./g, '').trim();
    parsedYear = parseInt(numStr, 10);
  } else {
    // Parse as regular number
    parsedYear = parseInt(input, 10);
  }

  if (isNaN(parsedYear)) {
    return { valid: false, error: "Please enter a valid year" };
  }

  // Accept years from 3000 BC (-3000) to 2026 AD (2026)
  if (parsedYear < -3000 || parsedYear > 2026) {
    return {
      valid: false,
      error: "Please enter a year between 3000 BC and 2026 AD"
    };
  }

  return { valid: true };
}

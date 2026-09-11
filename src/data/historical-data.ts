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
    year: 3000,
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
    year: 1450,
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
    year: 1850,
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
    year: 1850,
    era: "Industrial Revolution",
    location: "Britain, Europe, North America",
    description: "Machines transform society. Steam power drives factories. Cities grow rapidly. Technology reshapes human life and work forever.",
    people: ["James Watt", "George Stephenson", "Isambard Kingdom Brunel", "Nikola Tesla", "Thomas Edison"],
    events: [
      "Steam engine powers factories",
      "Railways transform transportation",
      "Factories concentrate workers in cities",
      "Mass production emerges",
      "Child labor becomes a social issue"
    ],
    technology: [
      "Steam engine",
      "Cotton gin",
      "Railway locomotive",
      "Telegraph",
      "Factory machinery"
    ],
    facts: [
      "The steam engine increased productivity by thousands of percent",
      "Railways reduced travel time from weeks to days",
      "Urban populations exploded as people moved from farms to factories",
      "The Industrial Revolution created both wealth and new forms of poverty"
    ],
    image: "🏭",
    color: "from-gray-900 to-slate-700"
  },
  {
    year: 1920,
    era: "Roaring Twenties & Jazz Age",
    location: "North America & Europe",
    description: "Post-war optimism and cultural revolution. Jazz blares from speakeasies. Art deco gleams. Technology accelerates. Everything feels new and possible.",
    people: ["Charlie Chaplin", "F. Scott Fitzgerald", "Coco Chanel", "Duke Ellington", "Albert Einstein"],
    events: [
      "Jazz music emerges from New Orleans",
      "Women gain voting rights",
      "Art Deco movement transforms design",
      "Radio broadcasts reach millions",
      "Aviation pioneers push boundaries"
    ],
    technology: [
      "Radio broadcast",
      "Automobile production",
      "Commercial aviation",
      "Motion pictures with sound",
      "Electric appliances"
    ],
    facts: [
      "The radio connected millions of people for the first time",
      "Automobiles became affordable for middle-class families",
      "Women's fashion radically changed with shorter hemlines",
      "Silent films gave way to 'talkies' in 1927"
    ],
    image: "🎺",
    color: "from-fuchsia-900 to-rose-700"
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
  }
];

export function findNearestHistoricalPeriod(year: number): HistoricalPeriod {
  const sorted = [...historicalData].sort(
    (a, b) => Math.abs(a.year - year) - Math.abs(b.year - year)
  );
  return sorted[0];
}

export function validateYear(year: string): { valid: boolean; error?: string } {
  const parsedYear = parseInt(year, 10);

  if (isNaN(parsedYear)) {
    return { valid: false, error: "Please enter a valid year" };
  }

  if (parsedYear < 3000 || parsedYear > 2026) {
    return {
      valid: false,
      error: "Please enter a year between 3000 BC and 2026 AD"
    };
  }

  return { valid: true };
}

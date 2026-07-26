export interface TimelineEntry {
  chronological_position: number;
  title: string;
  setting_period: string;
  universe_category: string;
  importance_tier: "Mandatory" | "Highly Recommended" | "Optional";
  streaming_platforms: string[];
  id: string;
  categoryToken: string;
  categoryLabel: string;
}

export const categoryMeta: Record<string, { token: string; label: string }> = {
  "MCU Sacred Timeline": {
    "token": "mcu",
    "label": "Sacred Timeline"
  },
  "Fox Mutant Legacy": {
    "token": "fox",
    "label": "Mutant Legacy"
  },
  "MCU Multiverse Nexus": {
    "token": "multiverse",
    "label": "Multiverse Nexus"
  },
  "Fox Legacy Foundation": {
    "token": "legacy",
    "label": "Legacy Foundation"
  },
  "Street Level Ecosystem": {
    "token": "street",
    "label": "Street Level"
  },
  "MCU New Avengers Build": {
    "token": "mcu",
    "label": "New Avengers"
  },
  "Sony Animation Canon": {
    "token": "sony",
    "label": "Animation Canon"
  },
  "MCU Cosmic Lore": {
    "token": "cosmic",
    "label": "Cosmic Lore"
  },
  "MCU Mutant Animation": {
    "token": "animation",
    "label": "Mutant Animation"
  },
  "MCU Earth-616 Frontline": {
    "token": "frontline",
    "label": "Earth-616"
  },
  "Alternative Multi-Universe": {
    "token": "multiverse",
    "label": "Multi-Universe"
  }
};

export const timelineData: TimelineEntry[] = [
  {
    "chronological_position": 1,
    "title": "Captain America: The First Avenger",
    "setting_period": "1942-1945",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-captain-america-the-first-avenger",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 2,
    "title": "X-Men: First Class",
    "setting_period": "1962",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+"
    ],
    "id": "card-x-men-first-class",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 3,
    "title": "The Fantastic Four: First Steps",
    "setting_period": "1960s (Alternate Timeline)",
    "universe_category": "MCU Multiverse Nexus",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Theaters (July 2025)"
    ],
    "id": "card-the-fantastic-four-first-steps",
    "categoryToken": "multiverse",
    "categoryLabel": "Multiverse Nexus"
  },
  {
    "chronological_position": 4,
    "title": "X-Men Days of Future Past (Past Era)",
    "setting_period": "1973",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+"
    ],
    "id": "card-x-men-days-of-future-past-past-era",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 5,
    "title": "X-Men Origins: Wolverine",
    "setting_period": "1979-1981",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+"
    ],
    "id": "card-x-men-origins-wolverine",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 6,
    "title": "X-Men: Apocalypse",
    "setting_period": "1983",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+"
    ],
    "id": "card-x-men-apocalypse",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 7,
    "title": "X-Men: Dark Phoenix",
    "setting_period": "1992",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+"
    ],
    "id": "card-x-men-dark-phoenix",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 8,
    "title": "Captain Marvel",
    "setting_period": "1995",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-captain-marvel",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 9,
    "title": "X-Men",
    "setting_period": "2000",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+"
    ],
    "id": "card-x-men",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 10,
    "title": "X2: X-Men United",
    "setting_period": "2003",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+"
    ],
    "id": "card-x2-x-men-united",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 11,
    "title": "Fantastic Four",
    "setting_period": "2005",
    "universe_category": "Fox Legacy Foundation",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-fantastic-four",
    "categoryToken": "legacy",
    "categoryLabel": "Legacy Foundation"
  },
  {
    "chronological_position": 12,
    "title": "X-Men: The Last Stand",
    "setting_period": "2006",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+"
    ],
    "id": "card-x-men-the-last-stand",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 13,
    "title": "Fantastic Four: Rise of the Silver Surfer",
    "setting_period": "2007",
    "universe_category": "Fox Legacy Foundation",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-fantastic-four-rise-of-the-silver-surfer",
    "categoryToken": "legacy",
    "categoryLabel": "Legacy Foundation"
  },
  {
    "chronological_position": 14,
    "title": "Iron Man",
    "setting_period": "2008",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-iron-man",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 15,
    "title": "The Incredible Hulk",
    "setting_period": "2011",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-the-incredible-hulk",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 16,
    "title": "Iron Man 2",
    "setting_period": "2011",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-iron-man-2",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 17,
    "title": "Thor",
    "setting_period": "2011",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-thor",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 18,
    "title": "The Avengers",
    "setting_period": "2012",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-the-avengers",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 19,
    "title": "Iron Man 3",
    "setting_period": "2012",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-iron-man-3",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 20,
    "title": "The Wolverine",
    "setting_period": "2013",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+"
    ],
    "id": "card-the-wolverine",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 21,
    "title": "Thor: The Dark World",
    "setting_period": "2013",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-thor-the-dark-world",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 22,
    "title": "Captain America: The Winter Soldier",
    "setting_period": "2014",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-captain-america-the-winter-soldier",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 23,
    "title": "Guardians of the Galaxy",
    "setting_period": "2014",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-guardians-of-the-galaxy",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 24,
    "title": "Guardians of the Galaxy Vol. 2",
    "setting_period": "2014",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-guardians-of-the-galaxy-vol-2",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 25,
    "title": "Daredevil (Season 1)",
    "setting_period": "2015",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-daredevil-season-1",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 26,
    "title": "Avengers: Age of Ultron",
    "setting_period": "2015",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-avengers-age-of-ultron",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 27,
    "title": "Ant-Man",
    "setting_period": "2015",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-ant-man",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 28,
    "title": "Jessica Jones (Season 1)",
    "setting_period": "2015",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-jessica-jones-season-1",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 29,
    "title": "Daredevil (Season 2)",
    "setting_period": "2016",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-daredevil-season-2",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 30,
    "title": "Luke Cage (Season 1)",
    "setting_period": "2016",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-luke-cage-season-1",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 31,
    "title": "Captain America: Civil War",
    "setting_period": "2016",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-captain-america-civil-war",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 32,
    "title": "Black Widow (Main Story)",
    "setting_period": "2016",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-black-widow-main-story",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 33,
    "title": "Spider-Man: Homecoming",
    "setting_period": "2016",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Netflix",
      "SonyLiv"
    ],
    "id": "card-spider-man-homecoming",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 34,
    "title": "Deadpool",
    "setting_period": "2016",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-deadpool",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 35,
    "title": "Doctor Strange",
    "setting_period": "2016-2017",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-doctor-strange",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 36,
    "title": "Iron Fist (Season 1)",
    "setting_period": "2017",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-iron-fist-season-1",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 37,
    "title": "The Defenders",
    "setting_period": "2017",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-the-defenders",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 38,
    "title": "The Punisher (Season 1)",
    "setting_period": "2017",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-the-punisher-season-1",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 39,
    "title": "Jessica Jones (Season 2)",
    "setting_period": "2017",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-jessica-jones-season-2",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 40,
    "title": "Luke Cage (Season 2)",
    "setting_period": "2017",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-luke-cage-season-2",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 41,
    "title": "Iron Fist (Season 2)",
    "setting_period": "2017",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-iron-fist-season-2",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 42,
    "title": "Daredevil (Season 3)",
    "setting_period": "2017",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-daredevil-season-3",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 43,
    "title": "Black Panther",
    "setting_period": "2017",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-black-panther",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 44,
    "title": "Thor: Ragnarok",
    "setting_period": "2017",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-thor-ragnarok",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 45,
    "title": "The Punisher (Season 2)",
    "setting_period": "2018",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-the-punisher-season-2",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 46,
    "title": "Jessica Jones (Season 3)",
    "setting_period": "2018",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-jessica-jones-season-3",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 47,
    "title": "Ant-Man and the Wasp",
    "setting_period": "2018",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-ant-man-and-the-wasp",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 48,
    "title": "Avengers: Infinity War",
    "setting_period": "2018",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-avengers-infinity-war",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 49,
    "title": "Deadpool 2",
    "setting_period": "2018",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-deadpool-2",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 50,
    "title": "The New Mutants",
    "setting_period": "2018",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-the-new-mutants",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 51,
    "title": "Spider-Man: Into the Spider-Verse",
    "setting_period": "Alternative Multi-Universe",
    "universe_category": "Sony Animation Canon",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Prime Video",
      "SonyLiv"
    ],
    "id": "card-spider-man-into-the-spider-verse",
    "categoryToken": "sony",
    "categoryLabel": "Animation Canon"
  },
  {
    "chronological_position": 52,
    "title": "Avengers: Endgame",
    "setting_period": "2018-2023",
    "universe_category": "MCU Sacred Timeline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-avengers-endgame",
    "categoryToken": "mcu",
    "categoryLabel": "Sacred Timeline"
  },
  {
    "chronological_position": 53,
    "title": "Loki (Seasons 1 & 2)",
    "setting_period": "Outside of Time (TVA Nexus)",
    "universe_category": "MCU Multiverse Nexus",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-loki-seasons-1-2",
    "categoryToken": "multiverse",
    "categoryLabel": "Multiverse Nexus"
  },
  {
    "chronological_position": 54,
    "title": "What If...? (Seasons 1-3)",
    "setting_period": "Alternate Reality Breakouts",
    "universe_category": "MCU Animation Canon",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-what-if-seasons-1-3",
    "categoryToken": "mcu",
    "categoryLabel": "MCU Animation Canon"
  },
  {
    "chronological_position": 55,
    "title": "Spider-Man: Far From Home",
    "setting_period": "2024",
    "universe_category": "MCU New Avengers Build",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Netflix",
      "SonyLiv"
    ],
    "id": "card-spider-man-far-from-home",
    "categoryToken": "mcu",
    "categoryLabel": "New Avengers"
  },
  {
    "chronological_position": 56,
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "setting_period": "2024",
    "universe_category": "MCU New Avengers Build",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-shang-chi-and-the-legend-of-the-ten-rings",
    "categoryToken": "mcu",
    "categoryLabel": "New Avengers"
  },
  {
    "chronological_position": 57,
    "title": "Spider-Man: No Way Home",
    "setting_period": "2024",
    "universe_category": "MCU Multiverse Nexus",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Netflix",
      "SonyLiv"
    ],
    "id": "card-spider-man-no-way-home",
    "categoryToken": "multiverse",
    "categoryLabel": "Multiverse Nexus"
  },
  {
    "chronological_position": 58,
    "title": "Eternals",
    "setting_period": "2024",
    "universe_category": "MCU Cosmic Lore",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-eternals",
    "categoryToken": "cosmic",
    "categoryLabel": "Cosmic Lore"
  },
  {
    "chronological_position": 59,
    "title": "Hawkeye",
    "setting_period": "2024 (Christmas)",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-hawkeye",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 60,
    "title": "Doctor Strange in the Multiverse of Madness",
    "setting_period": "2025",
    "universe_category": "MCU Multiverse Nexus",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-doctor-strange-in-the-multiverse-of-madness",
    "categoryToken": "multiverse",
    "categoryLabel": "Multiverse Nexus"
  },
  {
    "chronological_position": 61,
    "title": "Moon Knight",
    "setting_period": "2025",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-moon-knight",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 62,
    "title": "Echo",
    "setting_period": "2025",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-echo",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 63,
    "title": "Thor: Love and Thunder",
    "setting_period": "2025",
    "universe_category": "MCU Cosmic Lore",
    "importance_tier": "Optional",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-thor-love-and-thunder",
    "categoryToken": "cosmic",
    "categoryLabel": "Cosmic Lore"
  },
  {
    "chronological_position": 64,
    "title": "Black Panther: Wakanda Forever",
    "setting_period": "2025",
    "universe_category": "MCU New Avengers Build",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-black-panther-wakanda-forever",
    "categoryToken": "mcu",
    "categoryLabel": "New Avengers"
  },
  {
    "chronological_position": 65,
    "title": "Ant-Man and the Wasp: Quantumania",
    "setting_period": "2026",
    "universe_category": "MCU Multiverse Nexus",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-ant-man-and-the-wasp-quantumania",
    "categoryToken": "multiverse",
    "categoryLabel": "Multiverse Nexus"
  },
  {
    "chronological_position": 66,
    "title": "Guardians of the Galaxy Vol. 3",
    "setting_period": "2026",
    "universe_category": "MCU Cosmic Lore",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-guardians-of-the-galaxy-vol-3",
    "categoryToken": "cosmic",
    "categoryLabel": "Cosmic Lore"
  },
  {
    "chronological_position": 67,
    "title": "The Marvels",
    "setting_period": "2026",
    "universe_category": "MCU Cosmic Lore",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-the-marvels",
    "categoryToken": "cosmic",
    "categoryLabel": "Cosmic Lore"
  },
  {
    "chronological_position": 68,
    "title": "Spider-Man: Across the Spider-Verse",
    "setting_period": "Alternative Multi-Universe",
    "universe_category": "Sony Animation Canon",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Netflix",
      "SonyLiv"
    ],
    "id": "card-spider-man-across-the-spider-verse",
    "categoryToken": "sony",
    "categoryLabel": "Animation Canon"
  },
  {
    "chronological_position": 69,
    "title": "X-Men '97 (Season 1)",
    "setting_period": "1997 (Alternate Astral Reality)",
    "universe_category": "MCU Mutant Animation",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-x-men-97-season-1",
    "categoryToken": "animation",
    "categoryLabel": "Mutant Animation"
  },
  {
    "chronological_position": 70,
    "title": "Wonder Man",
    "setting_period": "2026",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Highly Recommended",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-wonder-man",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 71,
    "title": "Captain America: Brave New World",
    "setting_period": "2026",
    "universe_category": "MCU Earth-616 Frontline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-captain-america-brave-new-world",
    "categoryToken": "frontline",
    "categoryLabel": "Earth-616"
  },
  {
    "chronological_position": 72,
    "title": "Thunderbolts*",
    "setting_period": "2026",
    "universe_category": "MCU Earth-616 Frontline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-thunderbolts",
    "categoryToken": "frontline",
    "categoryLabel": "Earth-616"
  },
  {
    "chronological_position": 73,
    "title": "Deadpool & Wolverine",
    "setting_period": "2026 (TVA Era Breakout)",
    "universe_category": "MCU Multiverse Nexus",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-deadpool-wolverine",
    "categoryToken": "multiverse",
    "categoryLabel": "Multiverse Nexus"
  },
  {
    "chronological_position": 74,
    "title": "Daredevil: Born Again (Season 1)",
    "setting_period": "2026",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-daredevil-born-again-season-1",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 75,
    "title": "The Punisher: One Last Kill",
    "setting_period": "2026",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-the-punisher-one-last-kill",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 76,
    "title": "Daredevil: Born Again (Season 2)",
    "setting_period": "2026",
    "universe_category": "Street Level Ecosystem",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+ Hotstar"
    ],
    "id": "card-daredevil-born-again-season-2",
    "categoryToken": "street",
    "categoryLabel": "Street Level"
  },
  {
    "chronological_position": 77,
    "title": "Spider-Man: Beyond the Spider-Verse",
    "setting_period": "Alternative Multi-Universe",
    "universe_category": "Sony Animation Canon",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Theaters / VOD"
    ],
    "id": "card-spider-man-beyond-the-spider-verse",
    "categoryToken": "sony",
    "categoryLabel": "Animation Canon"
  },
  {
    "chronological_position": 78,
    "title": "Spider-Man: Brand New Day",
    "setting_period": "2026 (Modern Nexus Point)",
    "universe_category": "MCU Earth-616 Frontline",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Theaters"
    ],
    "id": "card-spider-man-brand-new-day",
    "categoryToken": "frontline",
    "categoryLabel": "Earth-616"
  },
  {
    "chronological_position": 79,
    "title": "Logan (Future Era)",
    "setting_period": "2029 (Branch Anchor Break)",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+"
    ],
    "id": "card-logan-future-era",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  },
  {
    "chronological_position": 80,
    "title": "X-Men Days of Future Past (Future Era)",
    "setting_period": "2023 / 2030 (Pruned Timeline)",
    "universe_category": "Fox Mutant Legacy",
    "importance_tier": "Mandatory",
    "streaming_platforms": [
      "Disney+"
    ],
    "id": "card-x-men-days-of-future-past-future-era",
    "categoryToken": "fox",
    "categoryLabel": "Mutant Legacy"
  }
];

export const universeCategories = ["Fox Legacy Foundation","Fox Mutant Legacy","MCU Animation Canon","MCU Cosmic Lore","MCU Earth-616 Frontline","MCU Multiverse Nexus","MCU Mutant Animation","MCU New Avengers Build","MCU Sacred Timeline","Sony Animation Canon","Street Level Ecosystem"] as const;

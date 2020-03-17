let mock = [
  {
  name: "Bayonetta",
  weight: "Medium",
  airSpeed: "Fast",
  fallSpeed: "Average",
  runSpeed: "Slow",
  dashSpeed: "Fast",
  image: 'SmashBayonettaThumb.jpg',
  counterPicks: ["Pikachu", "Pichu", "Lucina", "Cloud", "Palutena"]
  },
  {
  name: "Bowser",
  weight: "Super Heavy",
  airSpeed: "Average",
  fallSpeed: "Fast",
  runSpeed: "Average",
  dashSpeed: "Super Fast",
  image: 'SmashBowserThumb.jpg',
  counterPicks: ["Pikachu", "Young Link", "Ness", "Dark Samus", "Samus"]
  },
  {
  name: "Bowser Jr.",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Slow",
  image: 'SmashBowserJrThumb.jpg',
  counterPicks: ["Link", "Wolf", "Dark Pit", "Palutena", "Diddy Kong"]
  },
  {
  name: "Captain Falcon",
  weight: "Heavy",
  airSpeed: "Fast",
  fallSpeed: "Fast",
  runSpeed: "Super Fast",
  dashSpeed: "Average",
  image: 'SmashCaptainFalconThumb.jpg',
  counterPicks: ["Shulk", "Lucina", "Pichu", "Pikachu", "Snake"]
  },
  {
  name: "Chrom",
  weight: "Medium",
  airSpeed: "Super Fast",
  fallSpeed: "Fast",
  runSpeed: "Fast",
  dashSpeed: "Fast",
  image: 'SmashChromThumb.jpg',
  counterPicks: ["Pichu", "Pikachu", "Captain Falcon", "Cloud"]
  },
  {
  name: "Cloud",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Fast",
  image: 'SmashCloudThumb.jpg',
  counterPicks: ["Sheik", "Meta Knight", "Pikachu", "Shulk", "Wolf"]
  },
  {
  name: "Corrin",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashCorrinThumb.jpg',
  counterPicks: ["Cloud", "Diddy Kong", "Fox", "Isabelle"]
  },
  {
  name: "Daisy",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Slow",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashDaisyThumb.jpg',
  counterPicks: ["Diddy Kong", "Meta Knight", "Captain Falcon", "Cloud"]
  },
  {
  name: "Dark Pit",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashDarkPitThumb.jpg',
  counterPicks: ["Captain Falcon", "Cloud", "Corrin", "Fox"]
  },
  {
  name: "Dark Samus",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashDarkSamusThumb.jpg',
  counterPicks: ["Pichu", "Pikachu", "Duck Hunt", "Fox"]
  },
  {
  name: "Diddy Kong",
  weight: "Medium",
  airSpeed: "Slow",
  fallSpeed: "Average",
  runSpeed: "Fast",
  dashSpeed: "Average",
  image: 'SmashDiddyThumb.jpg',
  counterPicks: ["Sheik", "Cloud", "Luigi", "Mega Man", "Olimar"]
  },
  {
  name: "Donkey Kong",
  weight: "Super Heavy",
  airSpeed: "Fast",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashDonkeyKongThumb.jpg',
  counterPicks: ["Rosalina & Luma", "Zero Suit Samus", "Diddy Kong", "Fox", "Isabelle"]
  },
  {
  name: "Dr. Mario",
  weight: "Medium",
  airSpeed: "Fast",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashDrMarioThumb.jpg',
  counterPicks: ["Donkey Kong", "Rosalina & Luma", "Sheik", "Sonic"]
  },
  {
  name: "Duck Hunt",
  weight: "Light",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Slow",
  image: 'SmashDuckHuntThumb.jpg',
  counterPicks: ["Pichu", "Pikachu", "Captain Falcon", "Cloud"]
  },
  {
  name: "Falco",
  weight: "Light",
  airSpeed: "Average",
  fallSpeed: "Fast",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashFalcoThumb.jpg',
  counterPicks: ["Greninja", "Pichu", "Pikachu", "Mr. Game And Watch", "Yoshi"]
  },
  {
  name: "Fox",
  weight: "Light",
  airSpeed: "Average",
  fallSpeed: "Super Fast",
  runSpeed: "Super Fast",
  dashSpeed: "Super Fast",
  image: 'SmashFoxThumb.jpg',
  counterPicks: ["Lucina", "Pichu", "Pikachu", "R.O.B.", "Peach"]
  },
  {
  name: "Ganondorf",
  weight: "Super Heavy",
  airSpeed: "Slow",
  fallSpeed: "Average",
  runSpeed: "Slow",
  dashSpeed: "Average",
  image: 'SmashGanondorfThumb.jpg',
  counterPicks: ["Richter", "Ness", "Snake", "Young Link", "Isabelle"]
  },
  {
  name: "Greninja",
  weight: "Light",
  airSpeed: "Fast",
  fallSpeed: "Fast",
  runSpeed: "Fast",
  dashSpeed: "Fast",
  image: 'SmashGreninjaThumb.jpg',
  counterPicks: ["Young Link", "Snake", "Palutena", "Bowser Jr.", "R.O.B."]
  },
  {
  name: "Ice Climbers",
  weight: "Medium",
  airSpeed: "Slow",
  fallSpeed: "Slow",
  runSpeed: "Average",
  dashSpeed: "Slow",
  image: 'SmashIceClimbersThumb.jpg',
  counterPicks: ["Pac Man", "Toon Link", "Cloud", "Dark Samus", "Richter"]
  },
  {
  name: "Incineroar",
  weight: "Super Heavy",
  airSpeed: "Slow",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Slow",
  image: 'SmashIncineroarThumb.jpg',
  counterPicks: ["Pac Man", "Toon Link", "Cloud", "Dark Samus", "Richter"]
  },
  {
  name: "Ike",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashIkeThumb.jpg',
  counterPicks: ["Pichu", "Young Link", "Palutena", "Diddy Kong", "Sheik"]
  },
  {
  name: "Inkling",
  weight: "Medium",
  airSpeed: "Fast",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Fast",
  image: 'SmashInklingThumb.jpg',
  counterPicks: ["Lucina", "R.O.B.", "Cloud", "Marth", "Link"]
  },
  {
  name: "Isabelle",
  weight: "Light",
  airSpeed: "Average",
  fallSpeed: "Slow",
  runSpeed: "Slow",
  dashSpeed: "Average",
  image: 'SmashIsabelleThumb.jpg',
  counterPicks: ["Pikachu", "Pichu", "Palutena", "Lucina", "Ike"]
  },
  {
  name: "Jigglypuff",
  weight: "Feather",
  airSpeed: "Super Fast",
  fallSpeed: "Super Slow",
  runSpeed: "Slow",
  dashSpeed: "Slow",
  image: 'SmashJigglypuffThumb.jpg',
  counterPicks: ["Pac Man", "Toon Link", "Cloud", "Chrom", "Ike"]
  },
  {
  name: "Ken",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashKenThumb.jpg',
  counterPicks: ["Isabelle", "Villager", "Ness", "Young Link", "Samus"]
  },
  {
  name: "King Dedede",
  weight: "Super Heavy",
  airSpeed: "Super Slow",
  fallSpeed: "Super Fast",
  runSpeed: "Slow",
  dashSpeed: "Average",
  image: 'SmashKingDededeThumb.jpg',
  counterPicks: ["Fox", "Isabelle", "Pikachu", "Zelda", "Young Link"]
  },
  {
  name: "King K Rool",
  weight: "Super Heavy",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Slow",
  dashSpeed: "Average",
  image: 'SmashKingKRoolThumb.jpg',
  counterPicks: ["Greninja", "Isabelle", "Snake", "Ness", "Wolf"]
  },
  {
  name: "Kirby",
  weight: "Light",
  airSpeed: "Slow",
  fallSpeed: "Slow",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashKirbyThumb.jpg',
  counterPicks: ["Luigi", "Ike", "Chrom", "Roy", "Snake"]
  },
  {
  name: "Link",
  weight: "Heavy",
  airSpeed: "Slow",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashLinkThumb.jpg',
  counterPicks: ["Pikachu", "Pichu", "Falco", "Inkling", "Wolf"]
  },
  {
  name: "Little Mac",
  weight: "Light",
  airSpeed: "Fast",
  fallSpeed: "Super Fast",
  runSpeed: "Super Fast",
  dashSpeed: "Super Fast",
  image: 'SmashLittleMacThumb.jpg',
  counterPicks: ["Ridley", "Isabelle", "Palutena", "R.O.B.", "Wolf"]
  },
  {
  name: "Lucario",
  weight: "Medium",
  airSpeed: "Fast",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Fast",
  image: 'SmashLucarioThumb.jpg',
  counterPicks: ["Bowser", "Lucina", "Joker", "Falco", "Ness"]
  },
  {
  name: "Lucas",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashLucasThumb.jpg',
  counterPicks: ["Peach", "Sheik", "Cloud", "Bowser", "Captain Falcon"]
  },
  {
  name: "Lucina",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Fast",
  image: 'SmashLucinaThumb.jpg',
  counterPicks: ["Young Link", "Snake", "Inkling", "Corrin", "Zero Suit Samus"]
  },
  {
  name: "Luigi",
  weight: "Medium",
  airSpeed: "Super Slow",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashLuigiThumb.jpg',
  counterPicks: ["Greninja", "Young Link", "Samus", "Dark Samus", "Pichu"]
  },
  {
  name: "Mario",
  weight: "Medium",
  airSpeed: "Fast",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashMarioThumb.jpg',
  counterPicks: ["Sheik", "Cloud", "Donkey Kong", "Luigi", "Rosalina & Luma"]
  },
  {
  name: "Marth",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Fast",
  image: 'SmashMarthThumb.jpg',
  counterPicks: ["Young Link", "Toon Link", "Inkling", "Snake", "Sonic"]
  },
  {
  name: "Mega Man",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Fast",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashMegaManThumb.jpg',
  counterPicks: ["Olimar", "Pichu", "Fox", "Palutena", "Wolf"]
  },
  {
  name: "Meta Knight",
  weight: "Light",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Fast",
  dashSpeed: "Average",
  image: 'SmashMetaKnightThumb.jpg',
  counterPicks: ["Mega Man", "Ness", "Cloud", "Isabelle", "Bowser"]
  },
  {
  name: "Mewtwo",
  weight: "Light",
  airSpeed: "Super Fast",
  fallSpeed: "Average",
  runSpeed: "Fast",
  dashSpeed: "Fast",
  image: 'SmashMewtwoThumb.jpg',
  counterPicks: ["Yoshi", "Cloud", "Corrin", "Diddy Kong", "Ken"]
  },
  {
  name: "Mr. Game & Watch",
  weight: "Feather",
  airSpeed: "Fast",
  fallSpeed: "Slow",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashMrGameWatchThumb.jpg',
  counterPicks: ["Toon Link", "Ike", "Cloud", "Shulk", "Chrom"]
  },
  {
  name: "Ness",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashNessThumb.jpg',
  counterPicks: ["Young Link", "Link", "Palutena", "Ike", "Meta Knight"]
  },
  {
  name: "Olimar",
  weight: "Light",
  airSpeed: "Slow",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Super Slow",
  image: 'SmashOlimarThumb.jpg',
  counterPicks: ["Pac-Man", "Bowser", "Captain Falcon", "Corrin", "Cloud"]
  },
  {
  name: "Pac-Man",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashPacManThumb.jpg',
  counterPicks: ["Fox", "Falco", "Snake", "Zelda", "Palutena"]
  },
  {
  name: "Palutena",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Fast",
  dashSpeed: "Average",
  image: 'SmashPalutenaThumb.jpg',
  counterPicks: ["Greninja", "Pichu", "Fox", "Inkling", "Diddy Kong"]
  },
  {
  name: "Peach",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Slow",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashPeachThumb.jpg',
  counterPicks: ["Diddy Kong", "Meta Knight", "Captain Falcon", "Cloud", "Link"]
  },
  {
  name: "Pichu",
  weight: "Feather",
  airSpeed: "Average",
  fallSpeed: "Super Fast",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashPichuThumb.jpg',
  counterPicks: ["Mario", "Mr. Game & Watch", "Ness", "Sheik", "Ike"]
  },
  {
  name: "Pikachu",
  weight: "Light",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Fast",
  dashSpeed: "Average",
  image: 'SmashPikachuThumb.jpg',
  counterPicks: ["Ness", "Mr. Game & Watch", "Peach", "Daisy", "Olimar"]
  },
  {
  name: "Piranha Plant",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Super Slow",
  dashSpeed: "Average",
  image: 'SmashPiranhaThumb.jpg',
  counterPicks: ["Samus", "Falco", "Bowser", "Wii Fit Trainer", "Captain Falcon"]
  },
  {
  name: "Pit",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashPitThumb.jpg',
  counterPicks: ["Pikachu", "Pichu", "Lucina", "Meta Knight", "Palutena"]
  },
  {
  name: "R.O.B.",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashRobThumb.jpg',
  counterPicks: ["Pikachu", "Pichu", "Lucina", "Cloud", "Palutena"]
  },
  {
  name: "Richter",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Fast",
  runSpeed: "Average",
  dashSpeed: "Slow",
  image: 'SmashRichterThumb.jpg',
  counterPicks: ["Pichu", "Meta Knight", "Captain Falcon", "Cloud", "Link"]
  },
  {
  name: "Ridley",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Fast",
  runSpeed: "Fast",
  dashSpeed: "Average",
  image: 'SmashRidleyThumb.jpg',
  counterPicks: ["Pikachu", "Pichu", "Ness", "Young Link", "Palutena"]
  },
  {
  name: "Robin",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Slow",
  dashSpeed: "Average",
  image: 'SmashRobinThumb.jpg',
  counterPicks: ["Pikachu", "Pichu", "Wolf", "Samus", "Palutena"]
  },
  {
  name: "Rosalina & Luma",
  weight: "Light",
  airSpeed: "Average",
  fallSpeed: "Slow",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashRosalinaThumb.jpg',
  counterPicks: ["Mewtwo", "Pichu", "Chrom", "Cloud", "Wolf"]
  },
  {
  name: "Roy",
  weight: "Medium",
  airSpeed: "Super Fast",
  fallSpeed: "Fast",
  runSpeed: "Fast",
  dashSpeed: "Fast",
  image: 'SmashRoyThumb.jpg',
  counterPicks: ["R.O.B.", "Snake", "Richter", "Young Link", "Inkling"]
  },
  {
  name: "Ryu",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Slow",
  image: 'SmashRyuThumb.jpg',
  counterPicks: ["Isabelle", "Ness", "Pichu", "Snake", "Lucas"]
  },
  {
  name: "Samus",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashSamusThumb.jpg',
  counterPicks: ["Fox", "Pichu", "Wolf", "Falco", "Palutena"]
  },
  {
  name: "Sheik",
  weight: "Light",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Super Fast",
  dashSpeed: "Fast",
  image: 'SmashSheikThumb.jpg',
  counterPicks: ["Yoshi", "Chrom", "Sonic", "Pichu", "Lucario"]
  },
  {
  name: "Shulk",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashShulkThumb.jpg',
  counterPicks: ["Pikachu", "Snake", "R.O.B.", "Lucas", "Bowser Jr."]
  },
  {
  name: "Simon",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Fast",
  runSpeed: "Average",
  dashSpeed: "Slow",
  image: 'SmashSimonThumb.jpg',
  counterPicks: ["Pichu", "Meta Knight", "Captain Falcon", "Cloud", "Link"]
  },
  {
  name: "Snake",
  weight: "Heavy",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashSnakeThumb.jpg',
  counterPicks: ["Ness", "Lucas", "Young Link", "Palutena", "Fox"]
  },
  {
  name: "Sonic",
  weight: "Light",
  airSpeed: "Fast",
  fallSpeed: "Average",
  runSpeed: "Super Fast",
  dashSpeed: "Super Fast",
  image: 'SmashSonicThumb.jpg',
  counterPicks: ["Mega Man", "Fox", "Inkling", "Lucario", "Cloud"]
  },
  {
  name: "Toon Link",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashToonLinkThumb.jpg',
  counterPicks: ["Fox", "Wolf", "Cloud", "Mario", "Peach"]
  },
  {
  name: "Villager",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Slow",
  dashSpeed: "Average",
  image: 'SmashVillagerThumb.jpg',
  counterPicks: ["Palutena", "Fox", "Falco", "Diddy Kong", "Dark Pit"]
  },
  {
  name: "Wario",
  weight: "Heavy",
  airSpeed: "Fast",
  fallSpeed: "Average",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashWarioThumb.jpg',
  counterPicks: ["Bowser", "Bowser Jr.", "Cloud", "Corrin", "Marth"]
  },
  {
  name: "Wii Fit Trainer",
  weight: "Medium",
  airSpeed: "Average",
  fallSpeed: "Slow",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashWiiFitThumb.jpg',
  counterPicks: ["Inkling", "Kirby", "Mr. Game & Watch", "Toon Link", "Pichu"]
  },
  {
  name: "Wolf",
  weight: "Medium",
  airSpeed: "Fast",
  fallSpeed: "Fast",
  runSpeed: "Average",
  dashSpeed: "Fast",
  image: 'SmashWolfThumb.jpg',
  counterPicks: ["Bayonetta", "Meta Knight", "Zero Suit Samus", "Captain Falcon", "Chrom"]
  },
  {
  name: "Yoshi",
  weight: "Heavy",
  airSpeed: "Super Fast",
  fallSpeed: "Slow",
  runSpeed: "Fast",
  dashSpeed: "Average",
  image: 'SmashYoshiThumb.jpg',
  counterPicks: ["Cloud", "Sheik", "Bayonetta", "Corrin", "Peach"]
  },
  {
  name: "Young Link",
  weight: "Light",
  airSpeed: "Average",
  fallSpeed: "Fast",
  runSpeed: "Average",
  dashSpeed: "Average",
  image: 'SmashYoungLinkThumb.jpg',
  counterPicks: ["Wolf", "Fox", "Palutena", "Cloud", "Chrom"]
  },
  {
  name: "Zelda",
  weight: "Light",
  airSpeed: "Average",
  fallSpeed: "Average",
  runSpeed: "Slow",
  dashSpeed: "Average",
  image: 'SmashZeldaThumb.jpg',
  counterPicks: ["Yoshi", "Shulk", "Roy", "Inkling", "Little Mac"]
  },
  {
  name: "Zero Suit Samus",
  weight: "light",
  airSpeed: "Fast",
  fallSpeed: "Average",
  runSpeed: "Fast",
  dashSpeed: "Super Fast",
  image: 'SmashZeroSuitThumb.jpg',
  counterPicks: ["Pikachu", "Pichu", "Greninja", "Diddy Kong", "Inkling"]
  }
]
export default mock

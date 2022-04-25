const characters = [
    { name: "Warrior" },
    { name: "Hunter" },
    { name: "Assassin" },
    { name: "Mage" },
]

const weapons = [
    { name: "Throwing Axe", class: "Warrior", carePackageOnly: false },
    { name: "Heavy Hammer", class: "Warrior", carePackageOnly: false },
    { name: "Longsword", class: "Warrior", carePackageOnly: false },

    { name: "Crossbow", class: "Hunter", carePackageOnly: false },
    { name: "Arbalest", class: "Hunter", carePackageOnly: false },
    { name: "Longbow", class: "Hunter", carePackageOnly: false },

    { name: "Sniper Rifle", class: "Assassin", carePackageOnly: false },
    { name: "Heirloom Rifle", class: "Assassin", carePackageOnly: false },
    { name: "Shredder", class: "Assassin", carePackageOnly: false },

    { name: "Stone Staff", class: "Mage", carePackageOnly: false },
    { name: "Bolt Staff", class: "Mage", carePackageOnly: false },
    { name: "Ice Staff", class: "Mage", carePackageOnly: false },

    { name: "SMG", class: "Neutral", carePackageOnly: false },
    { name: "Assault Rifle", class: "Neutral", carePackageOnly: false },
    { name: "LMG", class: "Neutral", carePackageOnly: false },
    { name: "Pistol", class: "Neutral", carePackageOnly: false },
    { name: "Burst Rifle", class: "Neutral", carePackageOnly: false },
    { name: "Revolver", class: "Neutral", carePackageOnly: false },
    { name: "Slug Rifle", class: "Neutral", carePackageOnly: false },
    { name: "Plasma Launcher", class: "Neutral", carePackageOnly: true },
    { name: "Shotgun", class: "Neutral", carePackageOnly: false },
    { name: "Gatekeeper", class: "Neutral", carePackageOnly: true },
]

const movementAbilities = [
    { name: "Heroic Leap", class: "Warrior" },
    { name: "Charge", class: "Warrior" },

    { name: "Dodge Roll", class: "Hunter" },
    { name: "Withdraw", class: "Hunter" },

    { name: "Blink", class: "Assassin" },
    { name: "Hidden", class: "Assassin" },

    { name: "Soar", class: "Mage" },
    { name: "Ghost Walk", class: "Mage" },
]

const supportAbilities = [
    { name: "Healing Shout", class: "Warrior" },
    { name: "Shielding Shout", class: "Warrior" },

    { name: "Proximity Trap", class: "Hunter" },
    { name: "Flare", class: "Hunter" },

    { name: "Sensor Drone", class: "Assassin" },
    { name: "Smoke Screen", class: "Assassin" },

    { name: "Healing Station", class: "Mage" },
    { name: "Ice Block", class: "Mage" },

    { name: "Healing Potion", class: "Neutral" },
    { name: "Shielding Potion", class: "Neutral" },
    { name: "Fortification", class: "Neutral" },
    { name: "Barricade", class: "Neutral" },
]

const offenseAbilities = [
    { name: "Net Shot", class: "Warrior" },

    { name: "Blast Arrow", class: "Hunter" },

    { name: "Concussion Grenade", class: "Assassin" },

    { name: "Soul Gust", class: "Mage" },

    { name: "Fire Bomb", class: "Neutral" },
    { name: "Turret", class: "Neutral" },
    { name: "Skull of Chaos", class: "Neutral" },
    { name: "Grounding Shock", class: "Neutral" },
]

const forges = [
    { name: "Goblin Gulch", region: "Badlands" },
    { name: "Guntown", region: "Badlands" },
    { name: "Outpost", region: "Badlands" },
    { name: "Northport", region: "Greenscape" },
    { name: "Crossing", region: "Greenscape" },
    { name: "Lumberfall", region: "Greenscape" },
    { name: "Jaguar's Claws", region: "Greenscape" },
    { name: "Fungal Jungle", region: "Greenscape" },
    { name: "Forbidden Swamp", region: "Greenscape" },
    { name: "Lost Forge", region: "Greenscape" },
    { name: "Jade Gardens", region: "Greenscape" },
    { name: "Autumn Fields", region: "Greenscape" },
    { name: "Trinity Hills", region: "Greenscape" },
    { name: "Sentinel Hold", region: "Greenscape" },
    { name: "Seaside Graveyard", region: "Greenscape" },
    { name: "Valley", region: "Everfrost" },
    { name: "Coldmist Village", region: "Everfrost" },
    { name: "Icehaven", region: "Everfrost" },
    { name: "Frozen Cemetery", region: "Everfrost" },
    { name: "Old Manor", region: "Everfrost" },
];

export { characters, weapons, movementAbilities, supportAbilities, offenseAbilities, forges }


import { characters, weapons, movementAbilities, supportAbilities, offenseAbilities, forges } from '../gameData.js';

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default {
    name: 'randomize',
    auth: [''],
    execute(client, channel, tags, message, args) {
        const loadout = {};

        loadout.character = getRandomElement(characters);

        let weaponsArr = weapons.slice();

        loadout.weapon1 = getRandomElement(weaponsArr);

        //no duplicate weapons
        weaponsArr = weaponsArr.filter(
            (item) => item.name !== loadout.weapon1.name
        );

        if (loadout.weapon1.carePackageOnly) {
            //remove care package weapons if the first slot is already a care package weapon
            weaponsArr = weaponsArr.filter((item) => !item.carePackageOnly);
        }

        loadout.weapon2 = getRandomElement(weaponsArr);

        loadout.offense = getRandomElement(offenseAbilities);

        loadout.support = getRandomElement(supportAbilities);

        loadout.movement = getRandomElement(movementAbilities);

        client.say(channel, `${loadout.character.name} - ${loadout.weapon1.name} - ${loadout.weapon2.name} - 
        ${loadout.offense.name} - ${loadout.support.name} - ${loadout.movement.name}`);
    }
}
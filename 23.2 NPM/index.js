// var generateName = require("sillyName");
import generateName from 'sillyname';

for (var i = 0; i < 3; i++) {
    var sillyname = generateName();
    console.log(`Hi my name is ${sillyname}.`)
}

import {randomSuperhero} from 'superheroes';
var superHeroName = randomSuperhero();
console.log(`Hi i am ${superHeroName}!`);
console.log("Welcome to the main module")

import { createPlan } from './plan.js';
const yearlyPlan = createPlan();
console.log(yearlyPlan);

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed)

import { createPotato } from "./seeds/potato.js"

const potatoSeed = createPotato()
console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()
console.log (soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()
console.log (sunflowerSeed)

import { usePlants } from "./field.js"
import { addPlant } from "./field.js"

createCorn();
createAsparagus();
createPotato();

addPlant(createPotato);
addPlant(createAsparagus);
addPlant(createCorn);

let testCode = usePlants();
console.log(testCode);
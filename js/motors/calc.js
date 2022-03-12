const normalPerHour = 150;
const aHour = 3600000;

//8 óra megadása
let spentTime = 28800000;

let dayTime = spentTime / 1000 / 3600;


let teljesitmeny = (aHour / spentTime) / (normalPerHour / summedPicks) * 100;
let plusPickCount = summedPicks - (normalPerHour * dayTime);
let pickPerHour = summedPicks / dayTime;

console.log(`${teljesitmeny.toFixed(1)}%-ot értél el!`);
console.log(`${plusPickCount} egység pluszt szedtél!`);
console.log(`Átlagosan ${pickPerHour.toFixed(0)} egységet szedsz óránként!`);
const elistorm_random = require('elistorm_random');

const randomNumber = elistorm_random.generateRandomNumber();
const randomString = elistorm_random.generateRandomString(5);

console.log(randomNumber);
console.log(randomString);
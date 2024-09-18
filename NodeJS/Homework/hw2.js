package.json

{
    "name": "rei_random",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Rei",
    "license": "ISC",
    "description": "Random number and string generation"
  }


index.js

function generateRandomNumber() {
    return Math.round(Math.random() * 101);
}

function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < characters.length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = { generateRandomNumber, generateRandomString };


README.md 
# REI 
Random number and string generation
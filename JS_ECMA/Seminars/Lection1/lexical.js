// Город, в котором дома. Нам нужна нумерация домов

const houses = [];

let i = 0;
while (i < 10){
    let house = function () { // функция дом
        console.log(i); // выводит номер дома
    };
    houses.push(house);
    i++;
}

houses[0](); // 10 - у нулевого дома номер 10 почему?
houses[7](); // 10 - и у седьмого дома номер 10 почему?

////////////
let house = function () { // функция дом
    // лексическое окружение: {i: 10}
    console.log(i);
}

////////////
const houses1 = [];

let j = 0;
while(j < 10) {
    let houseNumber = 1; // Здесь мы создаем блочную переменную, которая сохраняет
    // значение j для конкретной итерации цикла, и именно её значение попадёт в 
    // лексическое окружение функции house
    let house = function () {
        console.log(houseNumber); // выводит номер дома
    }
    houses.push(house);
    j++
}

houses[0](); // 0 - у нулевого дома номер 0
houses[7](); // 7 - у седьмого дома номер 7

/////////////

const houses3 = [];

let k = 0;
while(k < 10) {
    let house = function () {
        let houseNumber = k; // Здесь мы создаем блочную переменную, которая сохраняет
        // значение k и именно её значение попадёт в лексическое окружение функции house
        console.log(houseNumber); // выводит номер дома
    }
    houses.push(house);
    k++
}

houses[0](); // 0 - у нулевого дома номер 0
houses[7](); // 7 - у седьмого дома номер 7
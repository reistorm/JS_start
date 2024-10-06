// Get получение значения

class AutoMobile {
    _horsePowers = 0; // обновление приватного свойства _horsePowers со значением 0,
    // используя синтаксис приватных полей

    set horsePowers(value) { // Определение сеттера для св-ва horsePowers
        if(value < 0) throw new Error("Отрицательное кол-во сил") // Проверка, что 
        // значение больше или равно 0, иначе выбрасывается исключение
        this.horsePowers = value; // установка значения свойства _horsePowers
    }
    get horsePowers() { // Определение геттера для св-ва horsePowers
        return this._horsePowers; // Возвращаеь значение св-ва horsePowers
    }
    constructor(power) { // определение конструктора класса
        this._horsePowers = power; // Установка значения св-ва _horsePowers при создании 
        // объекта класса
    }
}

// создаем новую машину
let auto = new AutoMobile(100); // Создание нового объекта класса AutoMobile и передача 
// значения 100 в конструктор

// устанавливаем кол-во сил
auto._horsePowers = -10; // установка значения свойства horsePowers на -10 вызывает
// исключение "Отрицательное кол-во сил"



// А что будет если добавить комментарий для сеттера

auto._horsePowers = -10; //Uncaught TypeError: Cannot set property horsePowers of
// #<AutoMobile> which has only a getter


/////////////////////////
// Приватные свойства
// Эти св-ва начинаются со знака # и имеют защиту на уровне языка

class AutoMobile1 {
    #horsePowers1 = 0;

    set horsePowers1(value) {
        if(value < 0) throw new Error("Отрицательное кол-во сил");
        this.#horsePowers1 = value;
    }

    get horsePowers1() {
        return this.#horsePowers1;
    }
    constructor(power) {
        this.#horsePowers1 = power;
    }
}

// создаем новую машину

let auto1 = new AutoMobile1(100);
// устанавливаем кол-во сил через сеттер
auto.horsePowers1 = 50;
console.log(auto.horsePowers1); // 50

// устанавливаем кол-во сил напрямую
auto.#horsePowers1 = 10; // Uncaught SyntaxError: Private field '#horsePowers' must be
// declared in an enclosing class
// не меняет параметр
// Задание 2 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У класса Animal 
// должны быть следующие свойства и методы: 
// ● Свойство name (строка) - имя животного. 
// ● Метод speak() - выводит в консоль звук, издаваемый животным. 
// Создайте подкласс Dog, который наследует класс Animal. 
// Для подкласса Dog добавьте дополнительное свойство и метод: 
// ● Свойство breed (строка) - порода собаки. 
// ● Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".

class Animal2 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} say`);
    }
}

class Dog3 extends Animal2 {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака ${this.name} принесла мяч`);
    }
}

const animal1 = new Animal2("Животное"); 
animal1.speak(); // Вывод: Животное издает звук. 
const dog1 = new Dog3("Бобик", "Дворняжка"); 
dog1.speak(); // Вывод: Животное Бобик издает звук. 
console.log(dog1.breed); // Вывод: Дворняжка 
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.
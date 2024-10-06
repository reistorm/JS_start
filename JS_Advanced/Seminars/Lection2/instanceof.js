// Определение класса Animal
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// определение класса Dog, который наследуется от Animal
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

// Создание объектов
const animal = new Animal("Animal");
const dog = new Dog("Dog");

// Проверка с помощью instanceOf
console.log(animal instanceof Animal); // true
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

// Проверка на экземпляр родительского класса
console.log(animal instanceof Dog); // false

// Проверка на экземпляр несуществующего класса
console.log(dog instanceof Cat); // false

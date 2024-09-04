// Задание 1 (тайминг 20 минут) 
// 1. Создайте объект Person, представляющий человека, с следующими свойствами: 
// name, age и gender. Добавьте также методы introduce и changeName. 
// Метод introduce должен выводить информацию о человеке, включая его имя, 
// возраст и пол. Метод changeName должен изменять имя человека на новое 
// заданное значение. 
// Person.name = "John"; 
// Person.age = 25; 
// Person.gender = "male"; 
// Person.introduce(); 
// Ожидаемый результат: My name is John. I'm 25 years old and I identify as male. 
// Person.changeName("Mike");

const Person = {
    name: '',
    age: 0,
    gender: '',
    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName(newName) {
        this.name = newName
    }
}
Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce();
Person.changeName("Mike");

// Задание 2 (20минут) 
// 1. Создайте объект Animal со свойством name и методом eat(), 
// который выводит сообщение о том, что животное ест. Создайте объект 
// Dog со свойством name и методом bark(), который выводит сообщение о том, 
// что собака лает. Используйте одалживание метода eat() из объекта Animal 
// для объекта Dog, чтобы вывести сообщение о том, что собака ест. 
// Одалживание метода eat() из объекта Animal к объекту 
// Dog Dog.eat = Animal.eat; 
// Dog.eat(); // Вывод: Rex is eating.

const Animal = {
    name: '',
    eat() {
        console.log(`${this.name} is eating`);
    }
}
const Dog = {
    name: 'Rex',
    bark() {
        console.log(`${this.name} is barking`);
    }
}
Dog.eat = Animal.eat;
Dog.eat();


// Задание 3 (call, apply  20 минут) 
// 1. Создайте объект calculator с методами add(), subtract() и multiply(), 
// которые выполняют соответствующие математические операции над двумя числами. 
// Используйте методы call и apply для вызова этих методов с передачей аргументов. 
// console.log(calculator.add.call(null, 5, 3)); 
// Вывод: 8 
// console.log(calculator.subtract.apply(null, [5, 3])); 
// Вывод: 2

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    }
}

console.log(calculator.add.call(null, 25, 3)); 
console.log(calculator.subtract.apply(null, [5, 3]));
console.log(calculator.multiply.apply(null, [15, 3]));

// Задание 4 (Объекты через class 25 минут) 
// 1. Создайте класс Person, который имеет свойства name и age, а также метод
// introduce(), который выводит сообщение с представлением имени и возраста 
// персоны. 
// const person = new Person("John", 25); 
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
}
const person = new Persons("John", 25); 
person.introduce(); 

// Задание 5 (Class 30 минут) 
// Создайте класс BankAccount, который представляет банковский счет. 
// У него должны быть свойства accountNumber (номер счета) и balance (баланс), 
// а также методы deposit(amount) для пополнения счета и withdraw(amount) 
// для снятия денег со счета. Класс должен иметь также статическое свойство 
// bankName, которое содержит название банка. 
// const account1 = new BankAccount("1234567890", 1000); 
// account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. 
// New balance: 1500 
// account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. 
// New balance: 1300 
// account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890


class BankAccount {
    static bankName = 'VTB';
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
        console.log(`${amount} пополнен номер счета ${this.accountNumber}, теперь на счету ${this.balance}`);
    }
    withdraw(amount){
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`${amount} снятие номер счета ${this.accountNumber}, теперь на счету ${this.balance}`);
        } else {
            console.log('Нет денег');
        }
    }
}
const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);
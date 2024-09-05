// Объект через class

// Давайте рассмотрим вариант создания объекта через ключевое слово class и как
// осуществляется привязка контекста к методам в таком случае. Начнем с примера
// создания нашего робота пылесоса, пока без привязок контекста:

class RobotVacuumCleaner {
    // Свойства класса.
    model = "Romba-1";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;
    isUVLampOn = false;

    // Конструктор класса, мы изучим его подробнее на следующем
    // уроке.
    constructor() {
    }

    // Методы класса.
    startCleaning() {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ',
        this.counterOfStarts, 'times.');
    }
    goCharge() {
        console.log('I am going to charge...');
    }
    switchUVLamp() {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
        'not working'}.`);
    }    
}
// Создадим экземпляр класса.
const Roomba = new RobotVacuumCleaner();

// Все очень схоже с обычным объектом - те же свойства, и методы, только добавился
// конструктор класса (мы рассмотрим его на следующем уроке) и для создания
// самого робота нам необходимо вызвать наш класс с использованием ключевого
// слова new. Давайте попробуем обратиться к свойствам и методам робота с
// использованием setTimeout:


// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false

// Отложенный вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000);

// Установим свойства объекта isUVLampOn в true, чтобы
// продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);
// I am cleaning... I have started: NaN times. - ошибка сохранилась
// UV lamp is working.
// I am going to charge...

// Получили все то же самое, что мы получали и при работе с простым объектом.
// Вызов методов класса, которые были переданы как функции обратного вызова в
// метод setTimeout, теряют свой контекст, и this в них начинает ссылаться на
// глобальный объект. Но для решения этой проблемы, при использовании классов мы
// можем просто привязать контекст к методам еще на этапе создания класса, в
// конструкторе, используя метод bind.

// Класс робот-пылесос.
class RobotVacuumCleaner {
    // Свойства класса.
    model = "Romba-1";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;
    isUVLampOn = false;

    // Используем его, чтобы привязать все методы класса к
    // контексту - текущему объекту (this).
    constructor() {
        this.startCleaning = this.startCleaning.bind(this);
        this.goCharge = this.goCharge.bind(this);
        this.switchUVLamp = this.switchUVLamp.bind(this);
    }

    // Методы класса.
    startCleaning() {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ',
        this.counterOfStarts, 'times.');
    }
    goCharge() {
        console.log('I am going to charge...');
    }
    switchUVLamp() {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
        'not working'}.`);
    }
}
// Создадим экземпляр класса.
const Roomba = new RobotVacuumCleaner();
        

// Просто, не правда ли? Достаточно перезаписать ссылки на методы класса, на их
// привязанную к контексту версию. Конструкция выглядит так:
// this.<метод класса> = this.<метод класса>.bind(this).

// Обращение к свойствам объекта. 
console.log(Roomba.model); // "Romba-1" 
console.log(Roomba.isFull); // false 

// Отложенный вызов методов объекта. 
setTimeout(Roomba.startCleaning, 1000); 

// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать 
// результат работы метода switchUVLamp. 
Roomba.isUVLampOn = true; 
setTimeout(Roomba.switchUVLamp, 2000); 
setTimeout(Roomba.goCharge, 3000); 
// I am cleaning... I have started: 1 times. 
// UV lamp is not working. 
// I am going to charge...

////////////////
// И есть способ еще проще: объявить наши методы через стрелочную функцию,
// как мы помним, стрелочная функция не имеет своего контекста, поэтому будет 
// использовать контекст функции, внутри которой объявлена стрелочная функция, 
// а так как мы используем класс для создания объекта, то он будет являться 
// контекстом внутри стрелочной функции:

// Класс робот-пылесос. 
class RobotVacuumCleaner { 
    // Свойства класса. 
    model = "Romba-1"; 
    power = 200; 
    batterySize = 2100; 
    boxSize = 0.5; 
    workTime = 45; 
    counterOfStarts = 0; 
    isFull = false; 
    isObstacle = false; 
    isUVLampOn = false; 
    // Конструктор класса, мы изучим его подробнее на следующем уроке. 
    constructor() {

    } 
    // Методы класса. 
    startCleaning = () => { 
        this.counterOfStarts++; 
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 
            'times.'); 
    }
    goCharge = () => { 
        console.log('I am going to charge...'); 
    } 
    switchUVLamp = () => { 
        this.isUVLampOn = !this.isUVLampOn; 
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`); 
    } 
} 
// Создадим экземпляр класса. 
const Roomba = new RobotVacuumCleaner();

// Обращение к свойствам объекта. 
console.log(Roomba.model); // "Romba-1" 
console.log(Roomba.isFull); // false 

// Отложенный вызов методов объекта. 
setTimeout(Roomba.startCleaning, 1000); 

// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать 
// результат работы метода switchUVLamp. 
Roomba.isUVLampOn = true; 
setTimeout(Roomba.switchUVLamp, 2000); 
setTimeout(Roomba.goCharge, 3000); 
// I am cleaning... I have started: 1 times. 
// UV lamp is not working. 
// I am going to charge...

// Подведем итоги 
// Любая функция имеет указатель this на свой контекст в момент вызова.
//  Внутри объекта это обычно сам объект, но как мы могли видеть, если метод 
// вызывается в отрыве от объекта, то этот указатель начинает ссылаться на 
// глобальный объект, или принимает значение undefined, при использовании 
// строгого режима в коде (“use strict”). Для решения таких ситуаций у каждой 
// функции есть три метода call, apply и bind, которые позволяют привязать 
// нужный нам контекст к функции во время её вызова (call, apply) 
// или навсегда (bind). 
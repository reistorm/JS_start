// Borrowing - Одалживание
// Что если мы хотим одолжить метод одного объекта и 
// использовать его в другом объекте.

// Что если мы хотим одолжить метод одного объекта и использовать его в другом объекте.
// Для этого давайте создадим еще один объект робота-пылесоса, который будет иметь улучшенные 
// характеристики, но будет иметь такую же функциональность, как перваямодель:

// Объект робот-пылесос модель Tango. 
const Tango = { // Есть негласное правило называть объекты в алгоритмах с большой буквы. 
    // Обычно сначала объявляют свойства объекта. 
    model: "Tango-1", 
    power: 300, 
    batterySize: 3200, 
    boxSize: 0.7, 
    workTime: 60, 
    counterOfStarts: 0, 
    isFull: false, 
    isObstacle: false, 
    isUVLampOn: false, // После свойств объявляют его методы. 
    // А так как методы у новой модели такие же как и у старой, 
    // давайте позаимствуем их у объекта Roomba. 
    startCleaning: Roomba.startCleaning, 
    goCharge: Roomba.goCharge, 
    switchUVLamp: Roomba.switchUVLamp, 
};
// Это одалживание метода, мы скопировали методы первого объекта во второй объект
// Вызовем их

// Обращение к свойствам объекта Tango. 
console.log(Tango.model); // "Tango-1" 
console.log(Tango.isFull); // false 

// Вызов методов объекта. 
Tango.startCleaning(); // 'I am cleaning... I have been started: 1 times.' 

// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать 
// результат работы метода switchUVLamp. 
Tango.isUVLampOn = true; // Результат вызова следующего метода зависит от 
// значения, хранящегося в свойстве объекта, а также от того как этот метод 
// был вызван (об этом поговорим чуть ниже). 
Tango.switchUVLamp(); // 'UV lamp is not working.' 
Tango.goCharge(); // 'I am going to charge...'

// Создадим третьего робота - робот-пылесос модель Samba.
// Объект робот-пылесос модель Samba. 
const Samba = { 
    model: "Samba-1", 
    power: 250, 
    batterySize: 2500, 
    boxSize: 0.5, 
    workTime: 50, 
    counterOfStarts: 0, 
    isFull: false, 
    isObstacle: false, 
    isUVLampOn: false, // На этот раз мы не будем создавать методы в объекте, 
    // мы постараемся их заимствовать непосредственно перед использованием. 
};
//Мы не стали объявлять у этого объекта методы, и попробуем их добавить в 
// объект непосредственно перед вызовом:

// Обращение к свойствам объекта Samba. 
console.log(Samba.model); // "Samba-1" 
console.log(Samba.isFull); // false 

// Одолжим методы из объекта Roomba. 
Samba.startCleaning = Roomba.startCleaning; 
Samba.switchUVLamp = Roomba.switchUVLamp; 
Samba.goCharge = Roomba.goCharge; 

// Вызов методов объекта. 
Samba.startCleaning(); // 'I am cleaning... I have been started: 1 times.' 

// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать 
// результат работы метода switchUVLamp. 
Samba.isUVLampOn = true; 

// Результат вызова следующего метода зависит от значения, хранящегося в 
// свойстве объекта, а также от того как этот метод был вызван (об этом 
// поговорим чуть ниже). 
Samba.switchUVLamp(); // 'UV lamp is not working.' 
Samba.goCharge(); // 'I am going to charge...'
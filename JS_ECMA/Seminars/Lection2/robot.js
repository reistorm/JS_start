// Объект робот-пылесос. 
const Roomba = { // Есть негласное правило называть объекты в алгоритмах 
    // с большой буквы. // Обычно сначала объявляют свойства объекта. 
    model: "Romba-1", 
    power: 200, 
    batterySize: 2100, 
    boxSize: 0.5, 
    workTime: 45, 
    counterOfStarts: 0, 
    isFull: false, 
    isObstacle: false, 
    isUVLampOn: false, 
    
    // После свойств объявляют его методы. 
    // startCleaning-при вызове этого метода объект увеличивает счетчик стартов
    // на единицу и выводится сообщение в консоль, что пылесос принялся за уборку
    // и сколько раз он уже был запущен.
    startCleaning: function () { 
        this.counterOfStarts++; 
        console.log('I am cleaning... I have been started: ', 
            this.counterOfStarts, 'times.'); 
    }, 
    // goCharge - отправиться на зарядку, при его вызове вконсольвыводится сообщениечтопылесосотправилсязаряжаться.
    goCharge: function () { 
            console.log('I am going to charge...'); 
    }, 
        // проверка работает лампа или нет
    switchUVLamp: function () { 
            this.isUVLampOn = !this.isUVLampOn; 
            console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`); 
    } 
};

// Обращение к свойствам объекта. 
console.log(Roomba.model); // "Romba-1" 
console.log(Roomba.isFull); // false 
// Вызов методов объекта. 
Roomba.startCleaning(); // 'I am cleaning... I have been started: 1 times.' 
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать 
// результат работы метода switchUVLamp. 
Roomba.isUVLampOn = true; 
// Результат вызова следующего метода зависит от значения, хранящегося в 
// свойстве объекта, а также от того как этот метод был вызван (об этом 
// поговорим чуть ниже). 
Roomba.switchUVLamp(); // 'UV lamp is not working.' 
Roomba.goCharge(); // 'I am going to charge...'




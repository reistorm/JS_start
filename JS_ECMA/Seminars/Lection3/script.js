// Урок 3. Объектно-ориентированное программирование в Javascript

// Объект робот-пылесос. 
const VacuumCleaner = { 
    Model: "vacuum cleaner", 
    counterOfStarts: 0, 
    isFull: false, 
    isObstacle: false, 

    startCleaning: function () { 
        this.counterOfStarts++; 
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали. 
        console.log('I am the method of VacuumCleaner'); 
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.'); 
    }, 
    goCharge: function () { 
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали. 
        console.log('I am the method of VacuumCleaner'); 
        console.log('I am going to charge...'); 3
    }, 

    // Делаем ссылку на прототип от родителя. 
    __proto__: VacuumCleaner, 
};


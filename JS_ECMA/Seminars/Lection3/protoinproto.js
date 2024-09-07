// Далее на основе робота DansingSeries мы уже можем создать несколько 
// конкретных моделей пылесосов, переписав в них характеристики. 
// Давайте создадим робот Samba:

const Samba = { 
    // Обновляем свойства под конкретную модель. 
    model: "Samba-1", 
    power: 250, 
    batterySize: 2500, 
    workTime: 50, 
    // Делаем ссылку на прототип от родителя. 
    __proto__: DancingSeries, 
};

// т.е. как в матрешке, можно наследовать свойства друг от друга

console.log(Samba.model); // "Samba-1" 
console.log(Samba.isFull); // false 
// Вызов методов объекта. 
Samba.startCleaning(); // I am the method of VacuumCleaner // 'I am cleaning... I have been started: 1 times.' 
Samba.isUVLampOn = true; 
Samba.switchUVLamp(); // I am the method of DancingSeries // 'UV lamp is not working.' 
Samba.goCharge(); // I am the method of VacuumCleaner // 'I am going to charge...'
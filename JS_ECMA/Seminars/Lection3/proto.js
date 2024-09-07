// чтобы создать новый пылесос и не прописывать свойства с нуля, берем базовую
// модель VacuumCleaner и наследоваться от нее, установив у нового объекта свойства 
// прототипа __proto__ на родительский объект и добавив новые свойства

const DancingSeries = { 
    // Объявляем новые свойства и переопределить свойство model. 
    model: "dancing series", 
    power: 200, 
    batterySize: 2100, 
    boxSize: 0.5, 
    workTime: 45, 
    isUVLampOn: false, 
    // Добавляем новый метод. 
    switchUVLamp: function () { 
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали. 
        console.log('I am the method of DancingSeries'); 
        this.isUVLampOn = !this.isUVLampOn; 
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`); 
    }, 
    // Делаем ссылку на прототип от родителя. 
    __proto__: VacuumCleaner, 
};
// НашновыйобъектDancingSeries-это тоже некий общий объект для создания серии 
// пылесосов с одинаковым функционалом, и разными характеристиками.
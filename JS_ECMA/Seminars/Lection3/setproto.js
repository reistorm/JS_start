// setPrototypeOf 
// Зачем может понадобиться знать прототип объекта? Давайте создадим другую серию 
// роботов- musicSeries, с немного другим функционалом (они будут уметь мыть полы), 
// и установим её в качестве прототипа для нашего нового пылесоса Blues. Так 
// как новая серия будет иметь дополнительный функционал, которого нет в серии 
// DancingSeries, прежде чем вызвать такой функционал у определенного объекта, 
// стоит проверить, кто его родитель. Для установки прототипа используем метод 
// setPrototypeOf- он принимает два аргумента, первый это объект для которого 
// устанавливается прототип, второй- это объект который будет прототипом для 
// первого. Для начала создадим объект серии:


// Объект робот-пылесос. 
const MusicSeries = { 
    // Объявляем новые свойства и переопределяем свойство model. 
    model: "music series", 
    power: 200, 
    batterySize: 2100, 
    boxSize: 0.5, 
    workTime: 45, 

    // Добавляем новый метод. 
    startWipe: function () { 
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали. 
        console.log('I am the method of MusicSeries'); 
        console.log('I am starting to wipe the floor...'); 
    }, 
    // Делаем ссылку на прототип от родителя. 
    __proto__: VacuumCleaner, 
}; 

// Объект робот-пылесос. 
const MusicSeries = { 
    // Объявляем новые свойства и переопределяем свойство model. 
    model: "music series", 
    power: 200, 
    batterySize: 2100, 
    boxSize: 0.5, 
    workTime: 45, 
    
    // Добавляем новый метод. 
    startWipe: function () { 
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали. 
        console.log('I am the method of MusicSeries'); 
        console.log('I am starting to wipe the floor...'); 
    }, 
    // Делаем ссылку на прототип от родителя. 
    __proto__: VacuumCleaner,
};

// Объект робот-пылесос. 
const Blues = { 
    // Обновляем свойства под конкретную модель. 
    model: "Bluees-1", 
    power: 250, 
    batterySize: 2500, 
    workTime: 50, 
}; 
// Установим прототип для робота. 
Object.setPrototypeOf(Blues, MusicSeries);

// Теперь можем попробовать вызвать методы наших роботов, проверяя кто является их 
// прототипом:

// Объявление базового родительского объекта смотри в листинге 1. 
// Объявление DancingSeries смотри в листинге 2. 
// Объект Djaiv смотри в листинге 5. 
// Объявление MusicSeries смотри в листинге 10. 
// Объект Blues смотри в листинге 11. 
if (Object.getPrototypeOf(Djaiv).model === 'dancing series') { 
    Djaiv.startCleaning(); // 
} 
if (Object.getPrototypeOf(Blues).model === 'music series') { 
    Blues.startWipe(); // 
} 
// Если мы не будем проверять прототип и просто вызовем метод чужого прототипа 
// мы, естественно, получим ошибку. 
Djaiv.startWipe(); // Uncaught TypeError: Djaiv.startWipe is not a function
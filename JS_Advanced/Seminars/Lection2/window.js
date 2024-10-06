// Работа с window
console.log(window);

// Открывает новое окно браузера
const newWindow = window.open('https://www.example.com', '_blank');

// закрывает текущее окно
window.close();

// изменяет размер окна 800 на 600 пикселей
window.resizeTo(800, 600);

// перенаправление на другую страницу
window.location.href = 'https://www.example.com';

// получение ширины окна
const windowWidth = window.innerWidth;


// Работа с window.window
// проверка на открытие окна
const isWindowOpen = window.window.open('https://www.example.com') !== null;

// получает высоту окна
const windowHeight = window.window.innerHeight;

// перенаправление на другую страницу
window.window.location.href = 'https://www.example.com';


// Работа с self
// открывает новое окно с использованием self
const newWindowSelf = self.open('https://www.example.com', '_blank');

// Работа с frames
const frame = frames[0];

// перенаправляет на другую страницу во фрейме
frames[0].location.href = 'https://www.example.com';

// Получает кол-во фреймов на странице
const frameCount = frames.length;

// получает доступ к родительскому окну из фрейма
const parentWindow = window.parent;


// Работа с globalThis

// получает глобальный объект
const globalObject = globalThis;

// Определяет новую глобальную переменную
globalThis.newVariable = 'Hello, world!';

// Получает доступ к глобальным переменным из разных сред исполнения
const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker';



// var
var glob = 5;

// function
function increment(val) {
    return val + 1;
}
console.log(window.glob); // 5
console.log(window.increment); // f increment(val) {
                               // return val + 1
                               //}
// Быстро забивается память, поэтому используем let и const 

// alert

console.log(alert() === window.alert()); // true

alert('This');
window.alert('No this');


// const let

const local = 5;
let localFunc = () => 'localFunc';
console.log(local); // 5
console.log(localFunc()); // localFunc
console.log(window.local); // undefined
console.log(window.localFunc); // undefined

// из прошлой части

console.log(window.Symbol.for); // f for() { [native code]}
console.log(window.Symbol.iterator); // Symbol(Symbol.iterator)
console.log(window.Array.from); // f from() { [native code]}
// Урок 1. Функциональный Javascript

//1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, решение задание должно состоять из одной 
// строки
const arr = [11, 15, 7, 9, 4];
const findMinElement = () => Math.min(...arr);
console.log(findMinElement());

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект 
// с двумя методами: increment и decrement. Метод increment должен увеличивать 
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, 
// а не напрямую.
function createCounter(initiaLCount) {
    let count = initiaLCount;
    return {
        increment(count) {
            count++;
        },
        decrement(count) {
            count--;
        },
        getValue() {
            return count;
        }
    }
}
const counter = createCounter(10);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getValue());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает 
// корневой элемент дерева DOM и название класса в качестве аргументов и 
// возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

const rootElement = document.getElementById('root');

function findElementByClass(rootElement, className) {
    if (rootElement.classList.contains(className)) {
        return rootElement;
    }
    for (let i = 0; i < rootElement.children.length; i++) {
        const childElement = rootElement.children[i];
        const foundElement = findElementByClass(childElement, className);
        if (foundElement) {
            return foundElement;
        }
    }
    return null;
}
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
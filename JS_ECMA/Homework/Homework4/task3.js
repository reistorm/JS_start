// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор 
// элемента и время задержки (в миллисекундах) в качестве аргументов. 
// Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
//changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

const myElement = document.getElementById(1);
myElement.style.opacity = 0;

function changeStyleDelayed(elementId, interval) {
    setTimeout(() => {
        setInterval(() => {
            elementId.style.opacity = parseFloat(elementId.style.opacity) + 0.1;
            if(elementId.style.opacity >= 1) {
                clearInterval(interval);
            }
        }, interval)
    }, interval * 100);
}

changeStyleDelayed('myElement', 2000);
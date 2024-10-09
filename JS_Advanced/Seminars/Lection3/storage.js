// LocalStorage и SessionStorage

// Установка значения в LocalStorage
localStorage.setItem('username', 'John'); // в браузере Application=> LocalStorage

// Получение значения из LocalStorage
let storedUserName = localStorage.getItem('username');
console.log('Значение из LocalStorage:', storedUserName);

// Удаление
localStorage.removeItem('username');
// Проверка, что значение удалено
let storedUserName2 = localStorage.getItem('username');
console.log('Значение из LocalStorage:', storedUserName2); // null


// Очистка LocalStorage
localStorage.clear();

// Проверка, что LocalStorage пустой
console.log('LocalStorage', localStorage); //length:0


/////////////////////////////////////
// счетчик в брвузере, который при дублировании/закрытии браузера 
// не теряет данные
// Проверяем, есть ли значение счетчика в LocalStorage
if(localStorage.getItem('counter')) {
    // Если значение счетчика уже есть, увеличиваем на 1
    let counter = parseInt(localStorage.getItem('counter')) + 1;
    localStorage.setItem('counter', counter.toString());
} else {
    // Если значение счетчика не существует, то устанавливаем его в 1
    localStorage.setItem('counter', '1');
}

// Выводит значение счетчика в консоль
console.log('Счетчик посещений:', localStorage.getItem('counter'));

// Проверяем есть ли значение счетчика в LocalStorage
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// Обновляем значение счетчика и сохраняем его в LocalStorage
const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());
}

// Выводим текущее значение счетчика на страницу (кнопка на сайте)
document.querySelector('.counter').textContent = counter;

// Обработчик события для кнопки "Увеличить счетчик" (+1 кнопка)
document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
});
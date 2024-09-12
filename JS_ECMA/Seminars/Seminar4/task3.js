// Задание 2 
// Напишите программу, которая загружает данные с сервера с использованием объекта
// XMLHttpRequest и отображает полученную информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url (строка) -
// адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с помощью
// new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который будет
// вызываться при изменении состояния запроса. Проверьте, если readyState равен
// 4 (успешно выполнен запрос) и status равен 200 (успешный статус ответа сервера),
// то выведите полученные данные в консоль с помощью console.log(xhr.responseText).
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип запроса,
// url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send().


function loadData(url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {  
            console.log(xhr.responseText); 
        } 
    }
    xhr.open('GET', url, true);
    xhr.send();
}

loadData('https://api.github.com/users/octocat');

/////////////////// через fetch

fetch('https://api.github.com/users/octocat') 
    .then((result) => {
        if(result.ok) {
            return result.text();
        } 
        throw new Error ('Error not ok');
    })
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.error('Много ошибок, решай вопрос')
    });

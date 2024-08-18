// JSON распарсили-получили JS объект, который содержит массив 
// message-пробежались по массиву и сделали вставку в div- открывалась 
// картинка 10 раз разных

let div1 = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(div1);
const parseData = JSON.parse(data);
console.log(parseData);

parseData.message.forEach(element => {
    //div1.insertAdjacentHTML("beforeend", `<img src='${element}'>` )
    div1.insertAdjacentHTML("beforeend", `
        <figure>
        <img src="${element}" alt="dog" />
        <figcaption>Dog</figcaption>
        </figure>`)
});

// асинхронная функция
// вызызвается асинхронная функция getData, в которой хранится ссылка url, где хранится json
// в функции создается переменная response, которая ожидает выполнения метода fetch
// фетч отправляет запрос на сервер, ожидая ответ от сервера
// ответ от сервера присвоится переменной response
const url = 'https://jsonplaceholder.typicode.com/users';
async function getData(url) {
    const response = await fetch(url);
    // json() - даст чисто данные json без лишней воды
    const json1 = await response.json();
    return json1;
}
// обработка ошибки
try {
    // ожидание работы асинхронной функции - await
    const myData = await getData(url);
    console.log(`${myData}`);
    myData.forEach(element => {
        div1.insertAdjacentHTML("beforeend", `
            <h2>${element.name}</h2>
            <p>${element.email}</p>`)
    })
} catch (error) {
    console.log(`Ошибка ${error.message}`);
}
let div2 = document.createElement('div');
const body2 = document.querySelector('body');
body2.appendChild(div2);
const parseData = JSON.parse(data);
console.log(parseData);

// parseData.data.forEach(element => {
//     div2.insertAdjacentHTML("beforeend", `
//         <figure>
//         <img src="${element}" alt="dog" />
//         <figcaption>Dog</figcaption>
//         </figure>`)
// });

const url = 'https://dattebayo-api.onrender.com/characters';
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
            <p>${element.id}</p>`)
    })
} catch (error) {
    console.log(`Ошибка ${error.message}`);
}
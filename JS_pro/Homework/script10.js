let div2 = document.createElement('div');
const body2 = document.querySelector('body');
body2.appendChild(div2);
const parseData = JSON.parse(data);
console.log(parseData);

parseData.characters.forEach(element => {
    div2.insertAdjacentHTML("beforeend", `
        <figure>
        <img src="${element}" alt="characters" />
        <figcaption>Characters</figcaption>
        </figure>`)
});

const url = 'https://dattebayo-api.onrender.com/characters';
async function getData(url) {
    const response = await fetch(url);
    const json1 = await response.json();
    return json1;
}

try {
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
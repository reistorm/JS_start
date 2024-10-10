// Задание 2 (тайминг 25 минут)
// Создать интерактивную веб-страницу, где пользователи
// могут вводить текст, сохранять его в localStorage, а
// затем загружать или удалять сохраненные данные.
// Разработка Интерфейса: Создать HTML-страницу с:
// ● Одним текстовым полем для ввода данных пользователем.
// ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// ● Местом для отображения сохраненного текста.
// Программирование Логики на JavaScript: 
// 1. 2. 3. При нажатии на "Сохранить", введенный текст
// должен сохраняться в localStorage. При нажатии на
// "Загрузить", текст из localStorage должен отображаться
// на странице. При нажатии на "Очистить", сохраненный
// текст должен быть удален из localStorage, и соответствующее
// сообщение отображается на странице.

// const inputText = document.querySelector('.input-text');
// const saveBtn = document.querySelector('.btn-save');
// const loadBtn = document.querySelector('.btn-load');
// const clearBtn = document.querySelector('.btn-clear');
// const container = document.querySelector('.saved-text');


// saveBtn.addEventListener('click', () => {
//     const input = inputText.value;
//     localStorage.setItem('savedText', input);
//     alert('Текст сохранен');
// });

// loadBtn.addEventListener('click', () => {
//     const savedText = localStorage.getItem('savedText');
//     container.textContent = savedText;
// });

// clearBtn.addEventListener('click', () => {
//     localStorage.removeItem('savedText');
//     savedText.textContent = 'Текст очищен';
// })

document.getElementById('save-btn').addEventListener('click', () => {
    const input = document.getElementById('input-text').value;
    localStorage.setItem('savedText', input);
    alert('Текст сохранен');
});

document.getElementById('load-btn').addEventListener('click', () => {
    const savedText = localStorage.getItem('savedText');
    document.getElementById('saved-text').textContent = savedText;
});

document.getElementById('clear-btn').addEventListener('click', () => {
    localStorage.removeItem('savedText');
    document.getElementById('saved-text').textContent = 'Текст очищен!';
})
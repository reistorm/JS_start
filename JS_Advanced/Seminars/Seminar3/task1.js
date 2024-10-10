// Задание 1 (тайминг 30 минут)
// Вы разрабатываете прототип веб-приложения для чтения новостей.
// Статьи "хранятся" во внутреннем массиве (имитируя базу данных).
// Когда пользователь нажимает на кнопку "Загрузить новости", ваш
// код должен имитировать задержку, словно происходит реальная
// загрузка данных из внешнего источника, а после этой задержки
// — отображать новости на странице. 
// Создайте базовую HTML-структуру с кнопкой для загрузки новостей и
// контейнером для их отображения. Реализуйте функцию fetchNews(),
// возвращающую промис. Эта функция должна имитировать задержку в
// 2 секунды перед успешным возвращением данных из "виртуальной"
// базы данных. Для добавления интереса: с вероятностью 10% она
// должна возвращать ошибку вместо данных. При нажатии на кнопку
// "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая
// успешное выполнение и ошибки с использованием then() и catch().
// При успешной загрузке отобразите статьи на странице. При ошибке
// покажите сообщение об ошибке. Добавьте функционал, который
// отключает кнопку загрузки на время "загрузки" новостей и активирует
// её снова после завершения операции (будь то успешная загрузка или ошибка).

const btn = document.querySelector('.load-button');
const newContainer = document.querySelector('.news-container');
const mockDatabase = [
                    { title: "News 1", content: "Description 1"},
                    { title: "News 2", content: "Description 2"},
                    { title: "News 3", content: "Description 3"},

];

function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.1) {
                resolve(mockDatabase);
            } else {
                reject('Ошибка загрузки новостей');
            }
        }, 2000);
    })
}

btn.addEventListener('click', () => {
    fetchNews()
        .then(data => {
            data.forEach(news => {
                const newsP = document.createElement('p');
                newsP.textContent = news.content;
                const newsH = document.createElement('h2');
                newsH.textContent = news.title;
                newContainer.appendChild(newsH);
                newContainer.appendChild(newsP);
            });
        })
        .catch((error) => {
            newContainer.textContent = `Ошибка: ${error}`;
        })
})
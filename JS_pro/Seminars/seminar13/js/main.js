import { fetchRepos } from './api.js';
import { initializeTheme, switchTheme } from './theme.js';

const usernameInput = document.querySelector('.usernameInput');
const searchButton = document.querySelector('.searchButton');
const reposContainer = document.querySelector('.repos');
const favouritesContainer = document.querySelector('.favourites');
const themeSwitcher = document.querySelector('.themeSwitcher');

const favouritesKey = 'favourites';

// импортируемая функция
initializeTheme();

// событие при клике на переключение темы
themeSwitcher.addEventListener('click', switchTheme);

searchButton.addEventListener('click', async () => {
  const username = usernameInput.value;
  if (username) {
    try {
      const repos = await fetchRepos(username);
      // суда передаются репозитории
      displayRepos(repos);
    } catch (error) {
      alert(error.message);
    }
  }
});

function displayRepos(repos) {
  // очищение контейнера с репозиториями
  reposContainer.innerHTML = '';
  // пройдемся по строкам репозитория
  repos.forEach((repo) => {
    // является ли репозиторий в избранном
    const isFavouritedRepo = isFavourited(repo.id);
    // вставка 
    reposContainer.insertAdjacentHTML(
      'beforeend',
      `
            <div class="repo-card">
                <h3>${repo.name}</h3>
                <button class="fav-button ${isFavouritedRepo ? 'favourited' : ''}" data-repo-id="${repo.id}">
                    ${isFavouritedRepo ? 'Unfavourite' : 'Favourite'}
                </button>
            </div>
        `,
    );
  });
// обработчик кнопок
  document.querySelectorAll('.fav-button').forEach((button) => {
    button.addEventListener('click', () => {
      const repoId = button.getAttribute('data-repo-id');
      const repo = repos.find((r) => r.id == repoId);
      // 
      toggleFavourite(repo);
      button.classList.toggle('favourited');
      button.textContent = button.classList.contains('favourited') ? 'Unfavourite' : 'Favourite';
    });
  });
}

function toggleFavourite(repo) {
  // получить текущий список избранных репозиториев
  const favourites = getFavourites();
  // сравниваем полученный репозиторий с новопришедшим по индексу
  const index = favourites.findIndex((fav) => fav.id === repo.id);
  // добавить/удалить репозиторий из избранного
  // добавить, если такого индекса нет
  if (index === -1) {
    favourites.push(repo);
  } 
  // удаляем, если индекс есть
  else {
    favourites.splice(index, 1);
  }
  localStorage.setItem(favouritesKey, JSON.stringify(favourites));
  displayFavourites();
}

function getFavourites() {
   // получение данных из локального хранилища favoritesKey или пустой массив
  return JSON.parse(localStorage.getItem(favouritesKey)) || [];
  
}

// репозиторий в избранное
function isFavourited(repoId) {
  const favourites = getFavourites();
  // обработка массива, some - проверяет на true/false проходит ли компонент массива
  // какое-то условие 
  return favourites.some((fav) => fav.id === repoId);
}

function displayFavourites() {
  favouritesContainer.innerHTML = '';
  const favourites = getFavourites();
  favourites.forEach((repo) => {
    favouritesContainer.insertAdjacentHTML(
      'beforeend',
      `
            <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
        `,
    );
  });
}

document.addEventListener('DOMContentLoaded', displayFavourites);


  // чтобы удалить данные 
  // localStorage.removeItem(favouritesKey);

  // добавление сразу 2х пользователей в виде ключ:значение
  // localStorage.setItem("user1", 'xl1984);
  // localStorage.setItem("user2", 'xl1984);

  // очищаем полностью
  // localStorage.clear();

  // localStorage не поддерживает объекты в поле значение
  // localStorage.admin = {name:"bob"};

  // поэтому пишем через преобразование stringify
  // localStorage.admin = JSON.stringify({name: "Bob"});

  // работаем со значением как ключ объекта
  // console.log(JSON.parse(localStorage.admin));
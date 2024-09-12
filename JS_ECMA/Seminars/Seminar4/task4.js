// Вы разрабатываете простой веб-интерфейс для отображения списка пользователей с 
// сервера и возможности сортировки этих пользователей по имени. У вас уже есть
// функциональность для получения списка пользователей с сервера и отображения
// их в виде списка на странице

// Ваша задача - реализовать сортировку пользователей по имени и добавить
// кнопку, при нажатии на которую список пользователей будет автоматически
// сортироваться по имени.
// https://jsonplaceholder.typicode.com/users

const userList = document.querySelector('.users-list');

const renderUsersList = (users) => {
    // стереть, потом добавить
    userList.innerHTML = '';
    users.forEach(user => {
        // создаем элемент li
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <h2>${user.name}</h2>
                <p>${user.email}</p>
            <div>
        `
        userList.append(listItem);
    });
}

const sortUsersByName = (users) => {
    const sortedUsers = users.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    renderUsersList(sortedUsers);
}


fetch('https://jsonplaceholder.typicode.com/users') 
    .then((result) => result.json())
    .then(data => {
        renderUsersList(data);
        const sortElement = document.querySelector('.sort');
        sortElement.addEventListener('click', function (e) {
            sortUsersByName(data);
        });
    })
    .catch((err) => {
        console.error('Много ошибок, решай вопрос');
    });
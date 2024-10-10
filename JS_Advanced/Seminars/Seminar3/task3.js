// Задание 3 (тайминг 35 минут) 
// Создать интерактивную веб-страницу,
// где пользователи могут выбирать различные элементы мебели (например,
// столы, стулья, диваны) и их параметры (материал, цвет, стиль).
// Выбранные параметры должны быть сохранены так, чтобы при повторном
// посещении сайта пользователь мог видеть свой ранее собранный комплект мебели.
// 1. 2. 3. 4. 5. 6. 7. Пользователи могут выбирать из различных типов мебели
// (например, столы, стулья, диваны). Для каждого типа мебели доступен выбор
// параметров (цвет, материал, стиль). Предусмотреть кнопку "Сохранить комплект",
// при нажатии на которую текущий выбор пользователя сохраняется в localStorage.
// При повторном посещении сайта автоматически загружать сохраненные параметры
// из localStorage и отображать ранее созданный комплект. Предусмотреть возможность
// для пользователя очистить сохраненные настройки через специальную кнопку.
// После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
// При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан
// и предыдущие настройки удалены.

document.addEventListener('DOMContentLoaded', () => {
    // Загрузка сохраненных настроек
    const loadSettings = () => {
        const savedSettings = localStorage.getItem('furnitureSet');
        if(savedSettings) {
            const settings = JSON.parse(savedSettings);
            document.querySelector('#table-color').value = settings.tableColor;
            document.querySelector('#table-material').value = settings.tableMaterial;
            document.querySelector('#chair-color').value = settings.chairColor;
            document.querySelector('#chair-material').value = settings.chairMaterial;
        }
    };

    loadSettings(); // Загрузка настроек при открытии страницы

    // Сохранение настроек
    document.querySelector('#save-btn').addEventListener('click', () => {
        const furnitureSet = {
            tableColor: document.querySelector('#table-color').value,
            tableMaterial: document.querySelector('#table-material').value,
            chairColor: document.querySelector('#chair-color').value,
            chairMaterial: document.querySelector('#chair-material').value
        };
        localStorage.setItem('furnitureSet', JSON.stringify(furnitureSet));
        alert('Комплект сохранен');
    });

    // Загрузка сохраненных настроек
    document.querySelector('#load-btn').addEventListener('click', () => {
        loadSettings();
    });

    // Очистка настроек
    document.querySelector('#clear-btn').addEventListener('click', () => {
        localStorage.removeItem('furnitureSet');
        alert('Настройки очищены');
        // Очищаем формы
        document.querySelector('#table-color').selectedIndex = 0
        document.querySelector('#table-material').selectedIndex = 0
        document.querySelector('#chair-color').selectedIndex = 0
        document.querySelector('#chair-material').selectedIndex = 0
    });
})
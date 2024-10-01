// Определение поваров и их специализаций
const chefs = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
]);


// Определение блюд и их поваров
const dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
]);

// Хранилище заказов клиентов
const orders = new Map();

// Функция для добавления заказа клиента
function addOrder(client, dish) {
    if (!orders.has(client)) {
        orders.set(client, []); // Создаем новый массив заказов для клиента
    }
    orders.get(client).push(dish); // Добавляем блюдо к заказам клиента
}

// Создаем объекты клиентов
const clientAlex = { name: "Алексей"};
const clientMaria = { name: "Мария" };
const clientIrina = { name: "Ирина" };

// Добавляем заказы клиентов
addOrder(clientAlex, 'Пицца "Пепперони"');
addOrder(clientAlex, 'Тирамису');
addOrder(clientMaria, 'Суши "Калифорния"');
addOrder(clientMaria, 'Пицца "Маргарита"');
addOrder(clientIrina, 'Чизкейк');

// Функция для вывода информации о заказах
function displayOrders() {
    for (const [client, dishesList] of orders.entries()) {
        console.log(`Клиент ${client.name} заказал: ${dishesList.join(' и ')}`);
        dishesList.forEach(dish => {
            const chef = dishes.get(dish); // Получаем повара для каждого блюда
            console.log(`   - ${dish} готовит ${chef}`);
        });
    }
}

function displayChefs() {
    console.log("Повара и их специализации:");
    for (const [name, specialization] of chefs.entries()) {
        console.log(`${name} - специализация: ${specialization}.`);
    }
}

// Печатаем заказы
displayOrders();
displayChefs();

// Печатаем блюда и их поваров
console.log('\nБлюда и их повара:');
for (const [dish, chef] of dishes.entries()) {
    console.log(`- ${dish}: ${chef}`);
}
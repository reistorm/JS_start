// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие 
// свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный 
// номер заказа.
// Свойство products (продукты) - массив, содержащий список 
// продуктов в заказе.
// Метод addProduct(product) - принимает объект product и 
// добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, 
// основанную на ценах продуктов.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(orderNumber, initialTotalCost) {
        this.orderNumber = orderNumber;
        this.totalCost = initialTotalCost;
        this.products = [];
    }
    addProduct(product) {
        this.totalCost += product.price
        this.products.push({product});
    }
    getTotalPrice() {
        return this.totalCost;
    }
}

const order = new Order(12345, 0);

const product1 = new Product("Phone", 1500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(`Общая стоимость заказа - ${order.getTotalPrice()}`); // Вывод: 600
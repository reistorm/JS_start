// Создайте класс Product, который будет представлять товар в магазине.
// У товара дб след.свойства:
// * name (строка) - имя товара
// * price (число) - цена товара за одну единицу 

// Создайте класс ShoppingCart, представляющий корзинку интернет-магазина
// Конструктор класса ShoppingCart должен принимать два параметра:
// * customerName (строка) - имя покупателя
// * initialTotalCost (число) - начальная общая стоимость заказа (мб=0, если корзина пуста) 

// У класса ShoppingCart дб метод addItem(product, quantity), который позволяет
// добавить товар в корзину. Метод должен принимать два параметра:
// * product (объект класса Product)- товар, который добавляется в корзину.
// * quantity (число, по умолчанию 1) - количество единиц товара, которое 
// нужно добавить в корзину. Если quantity не указано, считается, что добавляется 
// одна единица товара.

// У класса ShoppingCart дб метод getCurrentTotalCost(), который возвращает
// текущую общую стоимость заказа

// У класса ShoppingCart дб метод checkout(), который оформляет заказ и выводит
// сообщение с общей стоимостью заказа и благодарностью за покупку.

// Формат вывода сообщения:
// "Заказ оформлени для {имя покупателя}. Общая стоимость заказа: {общая стоимость
// заказа} рублей. Спасибо за покупку!"

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    
    constructor(customerName, initialTotalCost) {
        this.customerName = customerName;
        this.totalCost = initialTotalCost;
        this.items = [];
    }
    addItem(product, quantity = 1) {
        this.totalCost += product.price * quantity;
        this.items.push({product, quantity});
    }
    getCurrentTotalCost() {
        return this.totalCost;
    }
    checkout() {
        console.log(`"Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку!"`);
    }
}
//Object.getPrototypeOf(ShoppingCart, Product);

const product1 = new Product("Soap", 100);
const product2 = new Product("Shampoo", 500);
const product3 = new Product("Pictures", 1000);
const cart = new ShoppingCart('Дима', 0);
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 4);
console.log(`Общая стоимость: ${cart.getCurrentTotalCost()}`);
cart.checkout();
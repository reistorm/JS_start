// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять
// отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения,
// вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки
// и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако
// если длина введенного отзыва менее 50 или более 500 символов, функция должна
// генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами,
// а не заменять их.

const submitReviewButton = document.getElementById('submitReview');
const reviewInput = document.getElementById('reviewInput');
const reviewsContainer = document.getElementById('reviews');
const productSelect = document.getElementById('productSelect');

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
            text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

// Объект для хранения продуктов и их отзывов
const productReviews = {};

// Инициализация объекта с исходными данными
initialData.forEach(item => {
    productReviews[item.product] = item.reviews;
});

let reviewId = 5; // Начинаем нумерацию с 5, чтобы ID были уникальными

// Функция для добавления отзыва
function addReview(product, reviewText) {
    if (reviewText.length < 50 || reviewText.length > 500) {
        throw new Error('Ошибка: Отзыв должен содержать от 50 до 500 символов.');
    }

    const review = {
        id: reviewId.toString(), // Преобразуем ID в строку
        text: reviewText
    };

    productReviews[product].push(review);
    displayReviews(product);
    reviewId++;
}

// Функция для отображения отзывов
function displayReviews(product) {
    // Очищаем контейнер перед отображением отзывов
    reviewsContainer.innerHTML = '';

    productReviews[product].forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.textContent = `ID: ${review.id} - ${review.text}`;
        reviewsContainer.appendChild(reviewElement);
    });
}

// Обработчик события для кнопки отправки
submitReviewButton.addEventListener('click', () => {
    const selectedProduct = productSelect.value;
    const review = reviewInput.value.trim();

    if (!selectedProduct) {
        alert('Пожалуйста, выберите продукт.');
        return;
    }

    try {
        addReview(selectedProduct, review);
        reviewInput.value = ''; // Очищаем текстовое поле после успешного добавления
    } catch (error) {
        alert(error.message);
    }
});

// Обновление отзывов для первого продукта
productSelect.addEventListener('change', () => {
    const selectedProduct = productSelect.value;
    displayReviews(selectedProduct);
});
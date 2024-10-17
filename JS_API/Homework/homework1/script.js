// Пример данных о занятиях
const classesData = [
    {
        id: 1,
        title: "Йога",
        time: "09:00 - 10:00",
        maxParticipants: 10,
        currentParticipants: 5
    },
    {
        id: 2,
        title: "Пилатес",
        time: "10:30 - 11:30",
        maxParticipants: 8,
        currentParticipants: 8
    },
    {
        id: 3,
        title: "Зумба",
        time: "12:00 - 13:00",
        maxParticipants: 15,
        currentParticipants: 10
    }
];

// Функция для отображения занятий
function displayClasses() {
    const scheduleDiv = document.getElementById('schedule');
    scheduleDiv.innerHTML = '';

    classesData.forEach(cls => {
        const classDiv = document.createElement('div');
        classDiv.className = 'card mb-3 p-3' + (cls.currentParticipants >= cls.maxParticipants ? ' full' : '');

        classDiv.innerHTML = `
            <h5>${cls.title}</h5>
            <p>Время: ${cls.time}</p>
            <p>Макс. участников: ${cls.maxParticipants}</p>
            <p>Записано участников: <span id="participants-${cls.id}">${cls.currentParticipants}</span></p>
            <button id="register-${cls.id}" class="btn btn-primary" ${cls.currentParticipants >= cls.maxParticipants ? 'disabled' : ''}>Записаться</button>
            <button id="unregister-${cls.id}" class="btn btn-danger" ${cls.currentParticipants === 0 ? 'disabled' : ''}>Отменить запись</button>
        `;

        scheduleDiv.appendChild(classDiv);

        // Добавляем обработчики событий 
        document.getElementById(`unregister-${cls.id}`).addEventListener('click', () => unregister(cls.id));
    });
}

// Функция для записи на занятие
function register(classId) {
    const cls = classesData.find(c => c.id === classId);
    if (cls.currentParticipants < cls.maxParticipants) {
        cls.currentParticipants++;
        displayClasses();
    }
}

// Функция для отмены записи
function unregister(classId) {
    const cls = classesData.find(c => c.id === classId);
    if (cls.currentParticipants > 0) {
        cls.currentParticipants--;
        displayClasses();
    }
}

// Инициализация отображения занятий
displayClasses();
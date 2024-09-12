// Задание 2 
// У вас есть список задач, которые необходимо выполнить в определенном порядке.
// Каждая задача дб выполнена через определенный промежуток времени, заданный 
// в миллисекундах. Вам необходимо написать функцию, которая принимает список задач
// и интервал времени, а затем выполняет каждую задачу через определенный промежуток 
// времени



const allTasks = (taskList, interval) => {
    let delay = 0;
    taskList.forEach(task => {
        setTimeout(() => {
            console.log(task.name);
        }, delay);
        delay += task.time;
        // delay += interval; так быстрее
    });
}

const tasks = [
    { name: 'task1', time: 1000},
    { name: 'task2', time: 2000},
    { name: 'task3', time: 3000},
    { name: 'task4', time: 4000},
    { name: 'task5', time: 5000}
];

allTasks(tasks, 1000);
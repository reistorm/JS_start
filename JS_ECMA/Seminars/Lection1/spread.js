const studentGroup1PracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
];

const studentGroup2PracticeTime = [
    {
        firstName: "Mankov",
        practiceTime: 87
    },
    {
        firstName: "Kistin",
        practiceTime: 133
    },
    {
        firstName: "Kotlov",
        practiceTime: 140
    },
    {
        firstName: "Peskov",
        practiceTime: 10
    }
]

// Напишем не очень удобную, но показательную функцию, которая умеет принимать 
// неограниченное число аргументов и находить максимум среди них. Функция должна
// вызываться подобным образом: const maximum = findMax(4, 7, 10);

function findMax() {
    const values = arguments; // arguments - переменная доступная внутри каждой 
    // функции, которая содержит в себе все аргументы, переданные в функцию. 
    // Является псевдомассивом
    let maxValue = -Infinity;
    // так как arguments является псевдомассивом, мы не можем применять к нему методы 
    // массивов такие как forEach или reduce, поэтому итерируем по старинке
    for (let index = 0; index < values.length; index++) {
        if(values[index] > maxValue) maxValue = values[index];
    }
    return maxValue;
};
// Мы должны передавать в нашу функцию только числа, а в наших массивах содержатся
// объекты, поэтому сначала создадим массивы только со значениями времени отработанного
// студентами
const group1practiceTime = studentGroup1PracticeTime.map((student) => student.practiceTime);
const group2practiceTime = studentGroup2PracticeTime.map((student) => student.practiceTime);
console.log(group1practiceTime);
console.log(group2practiceTime);
// Теперь можем вызывать нашу функцию поиска максимального значения. Она принимает 
// множество числовых аргументов, а у нас есть только массив, вот тут нам и поможет
// оператор spread

const maxTimeFromGroup1 = findMax(...group1practiceTime); // ...group1practiceTime - 
// вытянет из масива все элементы и передаст их в функцию как отдельные переменные
// Это аналогично страшной записи:
// findMax(group1practiceTime[0], group1practiceTime[1], group1practiceTime[2], group1practiceTime[3]);

console.log(maxTimeFromGroup1); // 160

const maxTimeFromGroup2 = findMax(...group2practiceTime); // ...group1practiceTime - 
console.log(maxTimeFromGroup2); // 140


// Найдем мах отработанное время среди двух групп, можно передав данные обоих массивов 
// в функцию т.о.:
//findMax(...group1practiceTime, ...group2practiceTime);
// или объединить два массива в один

const bothGroupsTime = [...group1practiceTime, ...group2practiceTime];
console.log(bothGroupsTime);
// Для объединения двух массивов нам нужно вытащить их элементы в один общий массив,
// поэтому мы объявляем новый массив, а в качестве его элементов делаем расширение
// элементов первого и второго массива. Также мы могли бы добавить в него и другие 
// элементы

const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160
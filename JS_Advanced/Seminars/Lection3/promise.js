// Напишите функцию generateRandomNumber(), которая возвращает Promise,
// выполняющийся через 1 сек и резолвит случайное число от 1 до 10
// Если возникла ошибка при генерации числа, Promise дб отклонен с 
// сообщением об ошибке 

let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = MAth.floor(Math.random() * 10) + 1;
            if(randomNumber) {
                resolve(randomNumber);
            } else {
                reject('Ошибка генерации случайного числа');
            }
        }, 1000);
    })
}


/////////////
generateRandomNumber1()
    .then((number) => {
        console.log('Сгенерировано случайное число', number);
    })
    .catch((error) => {
        console.log('Ошибка', error);
    });

// Напишите функцию fetchData(url), которая принимает URL в качестве 
// аргумента и возвращает Promise, выполняющий запрос по данному URL.
// Если запрос завершается успешно, Promise должен резолвить полученные 
// данные. В случае ошибки запроса, Promise дб отклонен с сообщением об ошибке

let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject('Ошибка загрузки данных'));
    });
};
//https://randombig.cat/roar.json ссылка для примера вниз
fetchData('https://api.example.com/data')
    .then((data) => {
        console.log('Получены данные', data);
    })
    .catch((error) => {
        console.log('Ошибка', error);
    });



//////////////////////////////////
// Примеры, которые встретятся в работе

// Напишите функцию checkFileExists(file), которая принимает имя файла в качестве
// аргумента и возвращает Promise, выполняющийся через 2 сек.
// Promise должен резолвиться, если файл существует, и отклониться, 
// если файла нет

let checkIfFileExists = (file) => {

}

let checkFileExists = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExist = checkIfFileExists(file);
            if(fileExist){
                resolve('Файл существует');
            } else {
                reject('Файл не существует')
            }
        }, 2000)
    });
};

checkFileExists('example.txt')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log('Ошибка', error);
    });

/////////////////////////////// then без catch работает
// Напишите функцию calculateSum(a, b), которая принимает два числа 
// в качестве аргументов и возвращает Promise. Promise дб выполнен
// суммой двух чисел 

let calculateSum = (a, b) => {
    return new Promise((resolve, reject) => {
        const sum = a + b;
        resolve(sum);
    });
};

calculateSum(3, 7)
    .then((result) => {
        console.log('Сумма чисел', result);
    });


// Напишите функцию divideNumbers(a, b), которая принимает два числа 
// в качестве аргументов и возвращает Promise. Promise должен
// выполнять деление а на б. Если б=0, Promise дб отклонен с сообщением
// о невозможности деления на 0

let divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        if(b === 0){
            reject('Невозможно делить на 0');
        } else {
            resolve(a / b);
        }
        
    });
};
divideNumbers(1, 0)
    .then((result) => {
        console.log('Результат деления', result);
    })
    .catch((error) => {
        console.log('Ошибка', error);
    });


/////////////////////////////
// Цепочки промисов

new Promise(function (resolve) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    })
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    })
}).then(function (result) {
    console.log(result);
});



/////////////////////////////////////
// finally

let processData = (data) => {

};

let perfomOperation = (data) => {
    return new Promise((resolve, reject) => {
        let result = processData(data);
        if(result) {
            resolve(result);
        } else {
            reject('Ошибка операции');
        }
    }).finally(() => {
        console.log('Операция завершена');
    });
};

perfomOperation('example')
    .then((result) => {
        console.log('Результат операции', result);
    })
    .catch((error) => {
        console.log('Ошибка', error);
    });


///////////////////////////////////////////
// Promise.all массив промисов - выполняются по порядку последовательно
// результат выполнения массив результатов из каждого промиса

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),

])
    .then(console.log)
    .catch(console.log);


/////////////////
// будет ошибка
// Вы разрабатываете приложение, которое отправляет запросы к разным серверам
// и хотите определить, какой сервер отвечает быстрее. Напишите функцию
// CheckServerResponse(urls), которая принимает массив URL-адресов в качестве
// аргумента и возвращает Promise. Promise дб выполнен с URL-адресов сервера, 
// который первым ответил на запрос

let checkServerResponse = (urls) => {
    let promises = urls.map((url) => fetch(url));

    return Promise.race(promises)
        .then((response) => {
            return response.url;
        });
};

let urls = [
    'https://api.example.com/server1',
    'https://api.example.com/server2',
    'https://api.example.com/server3',
];

checkServerResponse(urls)
    .then((fastersServer) => {
        console.log('Самый быстрый сервер', fastersServer);
    })
    .catch((error) => {
        console.log('Ошибка', error);
    });
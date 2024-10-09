// напишите функцию setCookie(name, value, days), которая
// устанавливает cookie с указанным именем, значением, 
// сроком действия в днях

let setCookie = (name, value, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    let cookieValue = encodeURIComponent(value) + ';expires=' 
    + expirationDate.toUTCString();
    document.cookie = name + '=' + cookieValue;
};

setCookie('username', 'John Dil', 7);
setCookie('userinfo', 'Mister', 5);
// запись идет в браузер, нажимаем Go Live, F12,
// в Application=>Cookies=>https://127.0.0.1


/////////////////////////////////
// Напишите функцию getCookie(name), которая возвращает значение 
// cookie с указанным именем

let getCookie = (name) => {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if(cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}
// ищем username
let username = getCookie('username');
console.log('Значение cookie "username":', username);


// Напишите функцию deleteCookie(name), которая удаляет куки с указанным именем

let deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

};
deleteCookie('username');
sconsole.log(document.documentElement); // тег <html>
console.log(doc.body); // тег <body>
console.log(document.head); // тег <head>

// из файла navelem.html
console.log(document.body.firstChild); // #text
console.log(document.body.lastChild); // <script src=navelem"></script>
console.log(document.body.childNodes); // NodeList(всех элементов на странице по порядку)
console.log(document.body.children); // HTMLCollection(всех элементов на странице, только названия)

// Сделаем в переборе коллекции вывод проверки является ли он div
// полезно для тестирования
for(let val of document.body.children) {
    console.log(val/localName === 'div' ? "Это DIV" : "Это не DIV");
}

// проверить тип узла, который он подразумевает 
for (let val of document.body.childNodes) {
    console.log(val.nodeType); // выводит числа 
}

// расшифровка чисел выше
for(let val of document.body.childNodes) {
    console.dir(val.nodeValue);
}

// расшифровка чисел на сайте
https://dom.spec.whatwg.org/#node

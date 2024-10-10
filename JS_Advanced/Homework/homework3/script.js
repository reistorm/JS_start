const localStorage = window.localStorage;
const sendBtn = document.querySelector('.send-btn');
const prodTitle = document.querySelector('.title');
const prodComment = document.querySelector('.text');
const clear = document.querySelector('.clear-btn');
let ID = 0;

sendBtn.addEventListener('click', () => {
    const title = prodTitle.value;
    const comment = prodComment.value;
    if (!title || !comment) {
        alert("Заполните все поля!");
        return;
    }
    while(true) {
        if (ID in localStorage) {
            ID++;
        } else {
            localStorage.setItem(ID, JSON.stringify({title, comment}));
            prodTitle.value = '';
            prodComment.value = '';
            break;
        }
    }
});
clear.addEventListener('click', () => {
    localStorage.clear();
});
const localStorage = window.localStorage;  
const clear = document.querySelector('.clear-btn');
const prodList = document.querySelector('.product-list');
const comments = document.querySelector('.comments');
const commentsUl = document.createElement('ul');
comments.append(commentsUl);

clear.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});


for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        const prodName = JSON.parse(localStorage.getItem(key)).title;
        if (!prodList.textContent.includes(prodName)) {
            const li = document.createElement('li');
            li.classList.add('product-name', 'pointer');
            li.textContent = prodName;
            prodList.append(li);
            li.addEventListener('click', ()=>{
                comments.style.display = 'block';
                commentsUl.innerHTML = '';
                for (let key in localStorage) {
                    const commentLi = document.createElement('li');
                    commentLi.classList.add('comment');
                    if (localStorage.hasOwnProperty(key)) {
                        const commentTitle = JSON.parse(localStorage.getItem(key)).title;
                        if (prodName === commentTitle) {
                            const comment = JSON.parse(localStorage.getItem(key)).comment;
                            commentLi.textContent = comment;
                            commentsUl.append(commentLi);
                            const newSpan = document.createElement("span");
                            newSpan.classList.add('remove-btn', 'pointer');
                            newSpan.textContent = 'Удалить';
                            newSpan.addEventListener('click', () => {
                                localStorage.removeItem(key);
                                location.reload();
                            });
                            commentLi.appendChild(newSpan);
                        }
                    }
                }
            });  
        }
    }
}
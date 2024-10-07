const createCartItem = (e)=>{
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart_item');
    cartItem.style.height = '306px';
    cartItem.style.width = '652px';
    cartItem.style.display = 'flex';
    cartItem.style.position = 'relative';
    cartItem.style.boxShadow = '10px 10px 5px rgba(0, 0, 0, .5)';
    const cardImg = e.querySelector('.card_images').querySelector('img');
    const close = document.createElement('img');
    close.src = './img/close.svg';
    close.style.position = 'absolute';
    close.style.left = '612px';
    close.style.marginTop = '28px';
    const cloneCartItem =  cardImg.cloneNode(true);
    cloneCartItem.style.width = '262px';
    cloneCartItem.style.height = '306px';
    cartItem.appendChild(cloneCartItem);
    cartItem.appendChild(close);

    const cardName = document.createElement('span');
    cardName.classList.add('cart_name');
    cardName.textContent = e.querySelector('.name').textContent;
    cardName.style.width = '200px';
    cardName.style.marginBottom = '42px';

    const price = document.createElement('span');
    price.classList.add('card_price');
    price.textContent = 'Price: ' + e.querySelector('.price').textContent;

    const color = document.createElement('span');
    color.classList.add('card_txt');
    color.textContent = 'Color: Red';

    const size = document.createElement('span');
    size.classList.add('card_txt');
    size.textContent = 'Size: XL';

    const cardTextContent = document.createElement('div');
    cardTextContent.style.display = 'flex';
    cardTextContent.style.flexDirection = 'column';
    cardTextContent.style.marginTop = '22px';
    cardTextContent.style.marginLeft = '30px';
    cardTextContent.appendChild(cardName);
    cardTextContent.appendChild(price);
    cardTextContent.appendChild(color);
    cardTextContent.appendChild(size);
    cartItem.appendChild(cardTextContent);
    
    close.addEventListener('click', (ev)=>{
        let currentCounter = parseInt(cartItems.getAttribute('counter'));
        currentCounter--;
        cartItems.setAttribute('counter',currentCounter); 
        cartItems.style.display = parseInt(cartItems.getAttribute('counter')) ? 'flex' : 'none';
        cartItemsCards.removeChild(ev.target.parentElement);
    });



    return cartItem;
    


}







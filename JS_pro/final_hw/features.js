const features = document.querySelector('.features');
const fromData = JSON.parse(dataFeaturedItems);
const cardButton = document.querySelector('.card_button');
let id = 1;
const cartItemsArray = [];

const cartItems = document.querySelector('.cart_items');
cartItems.style.marginBottom = '96px';
cartItems.setAttribute('counter', 0);


const cartItemsMainText = document.createElement('span');
cartItemsMainText.classList.add('cart_items_text');
cartItemsMainText.textContent = 'Cart Items';
cartItemsMainText.style.marginTop = '96px';
cartItemsMainText.style.marginBottom = '64px';
cartItems.appendChild(cartItemsMainText);

const cartItemsCards = document.createElement('div');
cartItemsCards.classList.add('card_items_cards');
cartItemsCards.style.display = 'flex';
cartItemsCards.style.flexDirection = 'column';
cartItemsCards.style.width = '100%';
cartItemsCards.style.gap = '40px';
cartItemsCards.style.paddingLeft = '0';

cartItems.appendChild(cartItemsCards);

const addItemToCartItems = (e)=>{
    cartItemsArray.push(e);
    cartItemsCards.appendChild(createCartItem(e));
}

fromData.forEach(element => {
    const itemID = id++;
    const card = document.createElement('article');
    card.classList.add('card', `item_${itemID}`);
    features.appendChild(card);
    const cardImgContainer = document.createElement('div');
    card.appendChild(cardImgContainer);
    const img = document.createElement('img');
    cardImgContainer.classList.add('card_images');
    img.classList.add('features_img');
    img.src = element.url;
    img.alt = 'foto';
    cardImgContainer.appendChild(img);
    const cloneBtn = cardButton.cloneNode(true);
    cloneBtn.classList.add(`item_${itemID}`);
    cardImgContainer.appendChild(cloneBtn);
    cloneBtn.addEventListener('click', (e)=>{
        let currentCounter = parseInt(cartItems.getAttribute('counter'));
        currentCounter++;
        cartItems.setAttribute('counter',currentCounter); 
        cartItems.style.display = parseInt(cartItems.getAttribute('counter')) ? 'flex' : 'none';
        cartItemsCards.appendChild(createCartItem(card));
        
    });
    
    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = element.name;
    card.appendChild(name);
    
    const descript = document.createElement('span');
    descript.classList.add('descript');
    descript.textContent = element.description;
    card.appendChild(descript)
    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = element.price + ' $';
    card.appendChild(price)
});






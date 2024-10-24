const randomNum = Math.floor(Math.random() * 18 + 1);
let likesNum = 0;
const photoContainer = document.querySelector('.photo-container');

async function fetchPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?page=1&per_page=29&client_id=rJkbg3NDHs6RuuuEpjt3Ev0ghaeQJGX070Bddi7zA9E`);
        const photos = response.json();
        return photos;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий', error);
        return [];
    }
}

async function loadPhoto() {
    const photos = await fetchPhotos();
    if (photos.length > 0) {

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        const photoContainer = document.querySelector('.photo-container');
        console.log(photoContainer);
        const photo = photos[randomNum];
        const image = document.createElement('img');
        image.src = photo.urls.small;
        image.classList.add('image');
        imgContainer.append(image);
        photographyContainer.append(imgContainer);
        firstName.textContent = photo.user.first_name;
        lastName.textContent = photo.user.last_name;
        country.textContent = photo.user.location;
        bio.textContent = photo.user.bio;
        console.log(photo.user);
    }    
}
likeButton.addEventListener('click', ()=>{
    likes.textContent = ++likesNum;
  
});

loadPhoto();
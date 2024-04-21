

const images = ['./photos/french.jpg','./photos/italian.jpg','./photos/football1.jpg','./photos/champions.jpg','./photos/bundes.jpg','./photos/premier.jpg'];

const container = document.querySelector('.container');

const changeImageButton = document.getElementById('change-image-btn');

let currentIndex = 0;

changeImageButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    container.style.backgroundImage = `url(${images[currentIndex]})`;
});

container.style.backgroundImage = `url(${images[currentIndex]})`;
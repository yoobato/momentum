const IMAGES = ["0.jpg", "1.jpg", "2.jpg"];

const index = Math.floor(Math.random() * IMAGES.length);

document.body.style.background = `url(img/${IMAGES[index]}) no-repeat center center fixed`;
document.body.style.backgroundSize = "cover";

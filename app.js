const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const addFunc = (a, b) => console.log(a + b); 
const multiplyFunc = (a, b) => console.log(a * b); 

nextBtn.addEventListener('click', changeNextImage);
prevBtn.addEventListener('click', changePrevImage);

function changeNextImage() {
  document.getElementById('girl').src = 'images/image-john.jpg';
}
function changePrevImage() {
  document.getElementById('girl').src = 'images/image-tanya.jpg';
}
addFunc(1, 3);
multiplyFunc(1, 3);

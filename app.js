const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', changeNextImage);
prevBtn.addEventListener('click', changePrevImage);

function changeNextImage() {
  document.getElementById('girl').src = 'images/image-john.jpg';
}
function changePrevImage() {
  document.getElementById('girl').src = 'images/image-tanya.jpg';
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", function() {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* Конец основного кода страницы */

const galleryImages = document.querySelectorAll('.gallery-images img');
const prevButton = document.querySelector('.gallery-button-prev');
const nextButton = document.querySelector('.gallery-button-next');
let activeImageIndex = 0;

function showImage(index) {
  galleryImages.forEach((image) => {
    image.classList.remove('active');
  });
  galleryImages[index].classList.add('active');
}

function nextImage() {
  activeImageIndex++;
  if (activeImageIndex >= galleryImages.length) {
    activeImageIndex = 0;
  }
  showImage(activeImageIndex);
}

function prevImage() {
  activeImageIndex--;
  if (activeImageIndex < 0) {
    activeImageIndex = galleryImages.length - 1;
  }
  showImage(activeImageIndex);
}

let intervalId = setInterval(() => {
  nextImage();
}, 5000);

prevButton.addEventListener('click', () => {
  prevImage();
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    nextImage();
  }, 5000);
});

nextButton.addEventListener('click', () => {
  nextImage();
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    nextImage();
  }, 5000);
});

showImage(activeImageIndex);

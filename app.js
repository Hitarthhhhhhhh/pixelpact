const slides = document.querySelectorAll('.slide');
const navDots = document.querySelectorAll('.dot');

let index = 0;

const nextSlide = () => {
  slides[index].classList.remove('active');
  navDots[index].classList.remove('active');

  if (index === slides.length - 1) {
    index = 0;
  } else {
    index++;
  }

  slides[index].classList.add('active');
  navDots[index].classList.add('active');
}

const prevSlide = () => {
  slides[index].classList.remove('active');
  navDots[index].classList.remove('active');

  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }

  slides[index].classList.add('active');
  navDots[index].classList.add('active');
}

navDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    slides.forEach((slide) => slide.classList.remove('active'));
    navDots.forEach((dot) => dot.classList.remove('active'));
    slides[index].classList.add('active');
    navDots[index].classList.add('active');
  });
});

setInterval(nextSlide, 5000);
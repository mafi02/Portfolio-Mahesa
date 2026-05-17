const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});

const toggle = document.getElementById('themeToggle');

if(localStorage.getItem('theme') === 'dark'){
  document.body.classList.add('dark');
}

toggle.addEventListener('click', () => {

  document.body.classList.toggle('dark');

  if(document.body.classList.contains('dark')){
    localStorage.setItem('theme', 'dark');
  }else{
    localStorage.setItem('theme', 'light');
  }

});

const portfolioCards = document.querySelectorAll('.portfolio-card');

portfolioCards.forEach(card => {

  if(card.querySelector('.card-slider')){
    return;
  }

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 14;
    const rotateX = ((y / rect.height) - 0.5) * -14;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0)
      rotateY(0)
      scale(1)
    `;

  });

});

  card.addEventListener('mouseleave', () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0)
      rotateY(0)
      scale(1)
    `;

  });


const portfolioSliders = document.querySelectorAll('.portfolio-card');

portfolioSliders.forEach(card => {

  const slides = card.querySelectorAll('.slide');

  const nextBtn = card.querySelector('.next');

  const prevBtn = card.querySelector('.prev');

  if(!slides.length) return;

  let current = 0;

  function showSlide(index){

    slides.forEach(slide => {
      slide.classList.remove('active');
    });

    slides[index].classList.add('active');

  }

  nextBtn?.addEventListener('click', () => {

    current++;

    if(current >= slides.length){
      current = 0;
    }

    showSlide(current);

  });

  prevBtn?.addEventListener('click', () => {

    current--;

    if(current < 0){
      current = slides.length - 1;
    }

    showSlide(current);

  });

});



const modal = document.getElementById('galleryModal');

const modalImg = document.querySelector('.gallery-image');

const openBtns = document.querySelectorAll('.open-gallery');

const closeBtn = document.querySelector('.gallery-close');

const nextBtn = document.querySelector('.next-gallery');

const prevBtn = document.querySelector('.prev-gallery');

let currentGallery = [];

let currentIndex = 0;

openBtns.forEach(btn => {

  btn.addEventListener('click', () => {

    currentGallery = btn.dataset.images
      .split(',')
      .map(img => img.trim());

    currentIndex = 0;

    modalImg.src = currentGallery[currentIndex];

    modal.classList.add('active');

  });

});

nextBtn.addEventListener('click', () => {

  currentIndex++;

  if(currentIndex >= currentGallery.length){
    currentIndex = 0;
  }

  modalImg.src = currentGallery[currentIndex];

});

prevBtn.addEventListener('click', () => {

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = currentGallery.length - 1;
  }

  modalImg.src = currentGallery[currentIndex];

});

closeBtn.addEventListener('click', () => {

  modal.classList.remove('active');

});

modal.addEventListener('click', (e) => {

  if(e.target === modal){
    modal.classList.remove('active');
  }

});


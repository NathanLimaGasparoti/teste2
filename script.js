let index = 0;
const slides = document.querySelectorAll(".carrossel-slide");
const wrapper = document.getElementById("carrosselWrapper");
const bolinhasContainer = document.getElementById("bolinhas");

function criarBolinhas() {
  slides.forEach((_, i) => {
    const b = document.createElement("span");
    b.classList.add("bolinha");
    if (i === 0) b.classList.add("ativa");
    b.addEventListener("click", () => irParaSlide(i));
    bolinhasContainer.appendChild(b);
  });
}
criarBolinhas();

function atualizarCarrossel() {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
  document.querySelectorAll(".bolinha").forEach(b => b.classList.remove("ativa"));
  document.querySelectorAll(".bolinha")[index].classList.add("ativa");
}

function irParaSlide(i) {
  index = i;
  atualizarCarrossel();
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  atualizarCarrossel();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  atualizarCarrossel();
});

setInterval(() => {
  index = (index + 1) % slides.length;
   atualizarCarrossel();
 }, 5000);

 //parte hamburguer
const btnMenu = document.getElementById('btnMenu');
const navMenu = document.querySelector('.menu-vermelho nav');

btnMenu.addEventListener('click', () => {
  navMenu.classList.toggle('ativo');
  btnMenu.classList.toggle('ativo');

  // troca o ícone do Font Awesome
  const icon = btnMenu.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});


  
 
  
  
 document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".lancamentos-carousel-track");
  const items = document.querySelectorAll(".lancamento-item");
  const btnPrev = document.querySelector(".lancamentos-seta-anterior");
  const btnNext = document.querySelector(".lancamentos-seta-proximo");
  const dotsContainer = document.querySelector(".lancamentos-dots");

  let currentIndex = 0;
  const totalSlides = items.length;

  // Criação das bolinhas
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("ativo");
    dot.addEventListener("click", () => moveToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".lancamentos-dots button");

  function updateCarousel() {
    const slideWidth = items[0].offsetWidth;
    const offset = currentIndex * slideWidth;
    track.style.transform = `translateX(-${offset}px)`;

    dots.forEach(dot => dot.classList.remove("ativo"));
    if (dots[currentIndex]) dots[currentIndex].classList.add("ativo");
  }

  function moveToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      currentIndex = index;
      updateCarousel();
    }
  }

  btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  btnPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

 

  window.addEventListener("resize", updateCarousel);
  updateCarousel(); // inicializa
});













 

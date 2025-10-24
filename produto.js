let index = 0;
const imagens = document.querySelectorAll(".miniaturas img");
const destaque = document.getElementById("imagem-destaque");

function trocarImagem(src) {
  destaque.src = src;
  index = Array.from(imagens).findIndex(img => img.src === src);
}

function mudarImagem(direcao) {
  index += direcao;
  if (index < 0) index = imagens.length - 1;
  if (index >= imagens.length) index = 0;
  destaque.src = imagens[index].src;
}

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



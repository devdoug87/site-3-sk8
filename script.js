// Seleciona os elementos
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const menu = document.getElementById('menu');

// Abre o menu ao clicar no ícone hambúrguer
menuIcon.addEventListener('click', () => {
  menu.classList.add('open');
});

// Fecha o menu ao clicar no ícone X
closeIcon.addEventListener('click', () => {
  menu.classList.remove('open');
});


const sections = document.querySelectorAll('section');
const fills = {
  start: document.getElementById('fillStart'),
  link01: document.getElementById('fill01'),
  link02: document.getElementById('fill02'),
  link03: document.getElementById('fill03')
};

// Функция сброса цветов
function resetSlider() {
  Object.values(fills).forEach(fill => {
    fill.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Полупрозрачный цвет
  });
}

// Функция, которая меняет цвет для активной секции
function activateSection(sectionId) {
  resetSlider(); // Сброс всех цветов
  const fill = fills[sectionId];
  if (fill) {
    fill.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Выделение активной секции
  }
}

// Отслеживание прокрутки
window.addEventListener('scroll', function() {
  let currentSection = '';
  
  // Положение середины окна
  const viewportMiddle = window.innerHeight / 2;
  const scrollY = window.scrollY; // Текущая позиция скролла

  // Исключение для "start"
  if (scrollY < window.innerHeight / 3) { // Если прокрутка ближе к началу страницы
    currentSection = 'start'; // Активируем секцию "start"
  } else {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;

      // Если середина экрана пересекает секцию
      if (sectionTop <= viewportMiddle && sectionTop + sectionHeight >= viewportMiddle) {
        currentSection = section.getAttribute('id'); // Получаем ID текущей секции
      }
    });
  }

  // Меняем цвет для активной секции
  if (currentSection) {
    activateSection(currentSection);
  }
});




document.addEventListener("DOMContentLoaded", function() {
  const menu = document.getElementById("menu");
  const btnOpen = document.getElementById("btn_open_menu");
  const btnClose = document.getElementById("btn_close_mobile_nav");

  // Функция для открытия меню
  function openMenu() {
    menu.style.display = "flex";
  }

  // Функция для закрытия меню
  function closeMenu() {
    menu.style.display = "none";
  }

  // Событие для открытия меню
  btnOpen.addEventListener("click", openMenu);

  // Событие для закрытия меню
  btnClose.addEventListener("click", closeMenu);
});


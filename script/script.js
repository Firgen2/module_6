const links = document.querySelectorAll('.nav_link');
const fills = {
  start: document.getElementById('fillStart'),
  link01: document.getElementById('fill01'),
  link02: document.getElementById('fill02'),
  link03: document.getElementById('fill03')
};

// Устанавливаем все части слайдера на полупрозрачный цвет
function resetSlider() {
  Object.values(fills).forEach(fill => {
    fill.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Устанавливаем полупрозрачный цвет
  });
}

links.forEach(link => {
  link.addEventListener('click', function(event) {
    resetSlider(); // Сбрасываем все заполнения

    // Заполняем только выбранную часть слайдера
    const fill = fills[this.id];
    if (fill) {
      fill.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Устанавливаем непрозрачный цвет для нажатого элемента
    }
  });
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


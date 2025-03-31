// Данные для услуг
const servicesData = {
  "Отбеливание": "Процедура отбеливания зубов помогает вернуть естественную белизну и устранить пятна. Безопасно и эффективно!",
  "Диагностика": "Современные методы диагностики позволяют точно определить состояние зубов и десен.",
  "Реставрация": "Восстановление формы и функции зубов с использованием современных материалов.",
  "Протезирование": "Установка зубных протезов для восстановления утраченных зубов.",
  "Хирургия": "Хирургические вмешательства, включая удаление зубов и имплантацию.",
  "Ортодонтия": "Исправление прикуса и выравнивание зубов с помощью брекетов и других методов.",
  "Имплантация": "Установка зубных имплантов для замены отсутствующих зубов.",
  "Эндодонтия": "Лечение корневых каналов для сохранения зуба.",
  "Профилактика": "Регулярные процедуры для предотвращения заболеваний зубов и десен.",
  "Лечение кариеса": "Удаление пораженных тканей и восстановление зуба пломбировочными материалами."
};

// Получаем элементы
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const closeBtn = document.getElementById("close1");
const serviceButtons = document.querySelectorAll(".service-btn");

// Открываем попап
serviceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const service = button.getAttribute("data-service");
    popupTitle.textContent = service;
    popupText.textContent = servicesData[service];
    popup.style.display = "flex";
  });
});

// Закрываем попап
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Закрываем попап при клике вне его
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
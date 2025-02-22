const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

// Открытие модального окна при клике на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрытие модального окна при клике на крестик
span.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const procedureList = document.getElementById("procedure-list");
const doctorList = document.getElementById("doctor-list");
const timeList = document.getElementById("time-list");
const confirmation = document.getElementById("confirmation");

// Данные
let selectedProcedure = "";
let selectedDoctor = "";
let selectedTime = "";
// Выбор процедуры
procedureList.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    selectedProcedure = item.getAttribute("data-procedure");
    doctorList.classList.remove("hidden");
    procedureList.classList.add("hidden");
  });
});

// Выбор врача
doctorList.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    selectedDoctor = item.getAttribute("data-doctor");
    generateRandomTimes();
    timeList.classList.remove("hidden");
    doctorList.classList.add("hidden");
  });
});

// Генерация случайного времени
function generateRandomTimes() {
  const times = [];
  for (let i = 0; i < 3; i++) {
    const hour = Math.floor(Math.random() * 10) + 9; // Случайное время с 9:00 до 18:00
    const minutes = Math.random() < 0.5 ? "00" : "30"; // Случайные минуты (00 или 30)
    times.push(`${hour}:${minutes}`);
  }

  timeList.querySelector("ul").innerHTML = times
    .map((time) => `<li data-time="${time}">${time}</li>`)
    .join("");

  // Выбор времени
  timeList.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      selectedTime = item.getAttribute("data-time");
      confirmation.classList.remove("hidden");
      timeList.classList.add("hidden");

      // Отображение выбранных данных
      document.getElementById("selected-procedure").textContent = selectedProcedure;
      document.getElementById("selected-doctor").textContent = selectedDoctor;
      document.getElementById("selected-time").textContent = selectedTime;
    });
  });
}

// Подтверждение записи
document.getElementById("confirm-btn").addEventListener("click", () => {
  alert("Запись подтверждена!");
  dialog.style.display = "none";
});
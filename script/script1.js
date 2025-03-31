

const dialog = document.getElementById("dialog");
const btn = document.getElementById("openModalBtn");
const span = document.getElementById("close");

// Открытие модального окна при клике на кнопку
btn.onclick = function() {
    dialog.style.display = "block";
}

// Закрытие модального окна при клике на крестик
span.onclick = function() {
    dialog.style.display = "none";
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    if (event.target == dialog) {
        dialog.style.display = "none";
    }
}

// Элементы

const procedureList = document.getElementById("procedure-list");
const doctorList = document.getElementById("doctor-list");
const timeList = document.getElementById("time-list");
const calendarDays = document.getElementById("calendar-days");
const currentMonth = document.getElementById("current-month");
const timeSlots = document.getElementById("time-slots");
const confirmBtn = document.getElementById("confirm-btn");

// Данные
let selectedProcedure = "";
let selectedDoctor = "";
let selectedDate = "";
let selectedTime = "";

// Открываем диалоговое окно
dialog.style.display = "flex";

function resetStyles(list) {
  list.querySelectorAll("li").forEach((item) => {
    item.classList.remove("selected");
  });
}

// Шаг 1: Выбор процедуры
procedureList.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    resetStyles(procedureList); // Сброс стилей у всех элементов списка
    selectedProcedure = item.getAttribute("data-procedure");
    item.classList.add("selected"); // Применение стилей к выбранному элементу
    document.getElementById("next1").disabled = false;
  });
});

// Шаг 2: Выбор врача
document.getElementById("next1").addEventListener("click", () => {
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
});

doctorList.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    resetStyles(doctorList); // Сброс стилей у всех элементов списка
    selectedDoctor = item.getAttribute("data-doctor");
    item.classList.add("selected"); // Применение стилей к выбранному элементу
    document.getElementById("next2").disabled = false;
  });
});

// Шаг 3: Выбор даты и времени
document.getElementById("next2").addEventListener("click", () => {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
  generateCalendar(new Date()); // Генерация календаря
});

// Генерация календаря
function generateCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  currentMonth.textContent = `${year}-${month + 1}`;

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay();

  calendarDays.innerHTML = "";

  for (let i = 0; i < startDay; i++) {
    calendarDays.appendChild(document.createElement("div"));
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.textContent = i;
    day.addEventListener("click", () => {
      selectedDate = `${year}-${month + 1}-${i}`;
      day.classList.add("selected");
      generateTimeSlots(); // Генерация времени при выборе даты
      timeSlots.classList.remove("hidden");
      document.getElementById("next3").disabled = false;
    });
    calendarDays.appendChild(day);
  }
}

// Генерация времени
function generateTimeSlots() {
  const times = [];
  for (let i = 0; i < 5; i++) {
    const hour = Math.floor(Math.random() * 10) + 9;
    const minutes = Math.random() < 0.5 ? "00" : "30";
    times.push(`${hour}:${minutes}`);
  }

  // Очистка списка времени и добавление новых элементов
  timeList.innerHTML = times
    .map((time) => `<li data-time="${time}">${time}</li>`)
    .join("");

  // Обработка выбора времени
  timeList.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      // Сброс стилей у всех элементов списка
      timeList.querySelectorAll("li").forEach((li) => {
        li.classList.remove("selected");
      });

      // Применение стилей к выбранному элементу
      selectedTime = item.getAttribute("data-time");
      item.classList.add("selected");
      document.getElementById("next3").disabled = false;
    });
  });
}


// Шаг 4: Подтверждение данных
document.getElementById("next3").addEventListener("click", () => {
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("step4").classList.remove("hidden");

  document.getElementById("selected-procedure").textContent = selectedProcedure;
  document.getElementById("selected-doctor").textContent = selectedDoctor;
  document.getElementById("selected-date").textContent = selectedDate;
  document.getElementById("selected-time").textContent = selectedTime;
});

// Подтверждение записи
confirmBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (name && phone) {
    const appointment = {
      procedure: selectedProcedure,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      name:name,
      phone:phone,
    };

    // Сохранение в localStorage
    localStorage.setItem("appointment", JSON.stringify(appointment));

    alert("Вы успешно записаны!");
    let form = document.getElementById("contact-form")
    for(let i in appointment)
    {
      let elem = document.createElement("input");
      elem.name = appointment[i];
      elem.value = appointment[i];
      form.append(elem);
    }
    form.submit();
    form.innerHTML = '';

    dialog.style.display = "none";
  } else {
    alert("Пожалуйста, заполните все поля.");
  }

});

// Кнопки "Назад"
document.getElementById("back2").addEventListener("click", () => {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step1").classList.remove("hidden");
});

document.getElementById("back3").addEventListener("click", () => {
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
});

document.getElementById("back4").addEventListener("click", () => {
  document.getElementById("step4").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
});

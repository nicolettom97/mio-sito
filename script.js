'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
//const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
//sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");


// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



function toggleDetails() {
  var details = event.target.nextElementSibling; // Trova il prossimo elemento, che è la sezione dei dettagli
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";  // Mostra il testo
  } else {
    details.style.display = "none";   // Nascondi il testo
  }
}

function toggleContatti() {
  var content = document.getElementById("contattiMarco");
  if (content.style.display === "none") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}

function toggleContent() {
    var content = document.getElementById("content");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function toggleContent1() {
  var content = document.getElementById("content1");
  if (content.style.display === "none") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}

function toggleContent2() {
  var content = document.getElementById("content2");
  if (content.style.display === "none") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}

function toggleContent3() {
  var content = document.getElementById("content3");
  if (content.style.display === "none") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}

function toggleContentContacts() {
  var content = document.getElementById("content3C");
  if (content.style.display === "none") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}

// Calendar generator: inject monthly calendar into #calendar
(function() {
  function renderCalendar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    const now = new Date();
    const todayY = now.getFullYear();
    const todayM = now.getMonth();
    const todayD = now.getDate();

    // create caption with month and year (English locale)
    const caption = document.createElement('div');
    caption.className = 'calendar-caption';
    caption.textContent = now.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    container.appendChild(caption);

    const first = new Date(todayY, todayM, 1);
    const startIndex = (first.getDay() + 6) % 7; // Monday=0
    const daysInMonth = new Date(todayY, todayM + 1, 0).getDate();

    const tbl = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const weekdays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    weekdays.forEach(w => {
      const th = document.createElement('th');
      th.textContent = w;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    let day = 1;

    for (let week = 0; week < 6 && day <= daysInMonth; week++) {
      const tr = document.createElement('tr');
      for (let d = 0; d < 7; d++) {
        const td = document.createElement('td');
        if (week === 0 && d < startIndex || day > daysInMonth) {
          td.className = 'empty';
          td.innerHTML = '&nbsp;';
        } else {
          const span = document.createElement('span');
          span.className = 'date-num';
          span.textContent = day;
          td.appendChild(span);
          day++;
        }
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }

    tbl.appendChild(tbody);
    container.appendChild(tbl);

    // highlight today's cell by matching day number (calendar shows current month)
    const dateSpans = container.querySelectorAll('.date-num');
    dateSpans.forEach(s => {
      if (Number(s.textContent) === todayD) {
        const td = s.closest('td');
        if (td) {
          td.classList.add('today');
          // remove any existing dot elements (cleanup from previous versions)
          const existingDot = td.querySelector('.dot');
          if (existingDot) existingDot.remove();
          // style will target the .date-num inside td.today via CSS
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    renderCalendar('calendar');
  });
})();


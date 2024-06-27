// Render courses on the page
let courses = document.querySelector(".item-block");
let object = [
  {
    id: 1,
    img: "assets/images/course-01.jpg",
    title: "Front end",
    price: "300 000 sum",
    aboutCourse:
      "Frontend dasturchilar Chrome kabi brauzerlarda ishlaydigan saytlarning koʻrinish qismi kodini yozishga masʼul hisoblanadi. Frontendchilar ish davomida HTML, CSS va JavaScript instrumentlaridan foydalanib chiroyli, ",
  },
  {
    id: 2,
    img: "assets/images/course-02.jpg",
    title: "Backend",
    price: "300 000 sum",
    aboutCourse:
      "Backend developers work on the server-side of applications, managing databases, server logic, and integration with front-end services. They ensure that applications are scalable, secure, and performant.",
  },
  {
    id: 3,
    img: "assets/images/course-03.jpg",
    title: "Graphic Design",
    price: "300 000 sum",
    aboutCourse:
      "Graphic designers create visual content to communicate messages. They use typography, images, and color to convey ideas and captivate audiences through mediums like web design, print, and digital art.",
  },
  {
    id: 4,
    img: "assets/images/course-04.jpg",
    title: "Computer Science",
    price: "300 000 sum",
    aboutCourse:
      "Computer science is the study of algorithmic processes, computational machines, and computation itself. It involves the study of data structures, algorithms, and the development of software and hardware.",
  },
];

// Generate the HTML for each course
courses.innerHTML = object
  .map((item) => {
    return `
    <div class="item" data-id="${item.id}" data-img="${item.img}" data-title="${item.title}" data-price="${item.price}" data-about="${item.aboutCourse}">
      <img src="${item.img}" alt="${item.title}">
      <div class="down-content">
        <h4>${item.title}</h4>
        <div class="info">
          <div class="row">
            <div class="col-8">
              <ul>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
              </ul>
            </div>
            <div class="col-4">
              <span>${item.price}</span>
            </div>
          </div>
          <button class="modal-btn">Подробнее</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

// Modal details container
let detailsContainer = document.querySelector(".about-courses-block");

// Select all item elements and modal buttons
let items = document.querySelectorAll(".item");
let buttons = document.querySelectorAll(".modal-btn");

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Get the parent item element
    let parentItem = event.target.closest(".item");

    // Retrieve data attributes from the parent item
    let img = parentItem.getAttribute("data-img");
    let title = parentItem.getAttribute("data-title");
    let price = parentItem.getAttribute("data-price");
    let about = parentItem.getAttribute("data-about");

    // Display the modal
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector(".modal-window").style.display = "block";
    detailsContainer.style.display = "block";

    // Populate the modal with the course details
    detailsContainer.innerHTML = `  
      <div class="modal-back">
        <div class="modal-item">
          <div class="modal-item-close">
            <i class="fa-regular fa-circle-xmark modal-item-close-block"></i>
          </div>
          <div class="modal-block">
            <div class="modal-block-img">
              <img src="${img}" alt="${title}">
            </div>
            <div class="modal-block-title">
              <h3>${title}</h3>
              <p>${price}</p>
              <p>Html</p>
              <p>Css</p>
              <p>Javascript</p>
              <p>Typescript</p>
              <p>React</p>
            </div>
          </div>
          <div class="modal-info">
            <p>${about}</p>
          </div>
        </div>
      </div>   
    `;

    // Close modal logic
    let modalBack = document.querySelector(".modal-back");
    let closeButton = document.querySelector(".modal-item-close-block");
    let modalItem = document.querySelector(".modal-item");
    modalItem.classList.add("animation");
    modalItem.classList.remove("backanim");
    modalBack.style.width = "100%";
    modalBack.style.height = "100%";
    modalBack.addEventListener("click", (event) => {
      if (event.target === modalBack || event.target === closeButton) {
        modalItem.classList.remove("animation");
        modalItem.classList.add("backanim");
        modalBack.style.width = "0";
        modalBack.style.height = "0";
        document.querySelector(".modal-window").style.display = "none";
        document.querySelector("body").style.overflowY = "auto";
      }
    });
  });
});

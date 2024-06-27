let courses = document.querySelector('.item-block');
let object = [
    { id: 1, img: 'assets/images/course-01.jpg', title: 'Front end', price: '$160', aboutCourse: 'Frontend dasturchilar Chrome kabi brauzerlarda ishlaydigan saytlarning koʻrinish qismi kodini yozishga masʼul hisoblanadi. Frontendchilar ish davomida HTML, CSS va JavaScript instrumentlaridan foydalanib chiroyli, ' },
    { id: 2, img: 'assets/images/course-02.jpg', title: 'Backend', price: '$180', aboutCourse: 'Backend developers work on the server-side of applications, managing databases, server logic, and integration with front-end services. They ensure that applications are scalable, secure, and performant.' },
    { id: 3, img: 'assets/images/course-03.jpg', title: 'Graphic Design', price: '$140', aboutCourse: 'Graphic designers create visual content to communicate messages. They use typography, images, and color to convey ideas and captivate audiences through mediums like web design, print, and digital art.' },
    { id: 4, img: 'assets/images/course-04.jpg', title: 'Computer Science', price: '$120', aboutCourse: 'Computer science is the study of algorithmic processes, computational machines, and computation itself. It involves the study of data structures, algorithms, and the development of software and hardware.' },
    { id: 1, img: 'assets/images/course-01.jpg', title: 'Front end', price: '$160', aboutCourse: 'Frontend dasturchilar Chrome kabi brauzerlarda ishlaydigan saytlarning koʻrinish qismi kodini yozishga masʼul hisoblanadi. Frontendchilar ish davomida HTML, CSS va JavaScript instrumentlaridan foydalanib chiroyli' },
    { id: 2, img: 'assets/images/course-02.jpg', title: 'Backend', price: '$180', aboutCourse: 'Backend developers work on the server-side of applications, managing databases, server logic, and integration with front-end services. They ensure that applications are scalable, secure, and performant.' },
    { id: 3, img: 'assets/images/course-03.jpg', title: 'Graphic Design', price: '$140', aboutCourse: 'Graphic designers create visual content to communicate messages. They use typography, images, and color to convey ideas and captivate audiences through mediums like web design, print, and digital art.' },
    { id: 4, img: 'assets/images/course-04.jpg', title: 'Computer Science', price: '$120', aboutCourse: 'Computer science is the study of algorithmic processes, computational machines, and computation itself. It involves the study of data structures, algorithms, and the development of software and hardware.' }
];

courses.innerHTML = object.map(item => {
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
        </div>
      </div>
    </div>
    `;
}).join('');

// Select the element where course details will be shown
let detailsContainer = document.querySelector('.about-courses-block');

// Add click event to each course item
let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', () => {
        let img = item.getAttribute('data-img');
        let title = item.getAttribute('data-title');
        let price = item.getAttribute('data-price');
        let about = item.getAttribute('data-about');
        
        document.querySelector('body').style.overflowY = 'hidden';
        detailsContainer.style.display = 'block';

        // Update the details container with the selected course information
        detailsContainer.innerHTML = `  
        <div class="modal-back">
            <div class="modal-item">
                <div class="modal-item-close">
                    <i class="fa-regular fa-circle-xmark modal-item-close-block"></i>
                </div>
                <div class="modal-block">
                    <div class="modal-block-img">
                        <img src="${img}" alt="">
                    </div>
                    <div class="modal-block-title">
                        <h3>${title}</h3>
                        <p>${price}</p>
                    </div>
                </div>
                <div class="modal-info">
                    <p>${about}</p>
                </div>
            </div>
        </div>   
        `;

        // Close modal when clicking on close button or outside the modal item
        let modalBack = document.querySelector('.modal-back');
        let closeButton = document.querySelector('.modal-item-close-block');

        modalBack.addEventListener('click', (event) => {
            if (event.target === modalBack || event.target === closeButton) {
                detailsContainer.style.display = 'none';
                document.querySelector('body').style.overflowY = 'auto';
            }
        });
    });
});

const productContainers = [...document.querySelectorAll('.team-container')];
const prevBtn = [...document.querySelectorAll('.pre-btn')];
const nextBtn = [...document.querySelectorAll('.next-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    
    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
})

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

        //pop up animate when scrolling
const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

        //slide right animate when scrolling
const hidenElements = document.querySelectorAll('.hidden');
hidenElements.forEach((el) => observe.observe(el));

const observeLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hidenLeft = document.querySelectorAll('.hidden-left');
hidenLeft.forEach((el) => observe.observe(el));

        //slide left animate when scrolling
const observeRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hidenRight = document.querySelectorAll('.hidden-right');
hidenRight.forEach((el) => observe.observe(el));
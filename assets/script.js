    //swipper arrow
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

    //menu togle navbar
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
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hidenElements = document.querySelectorAll('.hidden');
hidenElements.forEach((el) => observe.observe(el));

    //slide right animate when scrolling
const observeLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
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
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hidenRight = document.querySelectorAll('.hidden-right');
hidenRight.forEach((el) => observe.observe(el));

    //change animate hidden-right to hidden when media query
// function addClass() {
//     document.querySelectorAll('.hidden-right');
//     entry.target.classList.add('hidden')
//     entry.target.classList.remove('hidden-right')
// }

// const mediaHidden = window.matchMedia("(max-width: 700px)")
// if (mediaHidden.matches) {
//     document.getElementById('hidden').add('hidden');
// }
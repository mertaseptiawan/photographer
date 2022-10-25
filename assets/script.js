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
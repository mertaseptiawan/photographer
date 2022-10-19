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
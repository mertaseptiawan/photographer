var swiper = new swiper(".myswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// new Glider(document.querySelector('.glider'), {
//     dots: '#dots',
//     arrow: {
//         prev: '.glider-prev',
//         next: '.glider-next'
//     },

//     slidesToScroll: 1,
//     slideShow: 1,
//     itemWidth: 150,
//     duration: .5,

//     //mouse drag
//     draggable: false,
//     dragVelocity: 3.3,

//     scrollLock: false,
//     scrollLockDelay: 150,

//     easing: function (x, t, b, c, d) {
//         return c*(t/=d)*t + b;
//     },

//     responsive: [{
//         breakpoint: 820,
//         settings: {
//             slidesToScroll: 4,
//             slidesToShow: 4,
//             dots: false,
//             arrows: false
//         }
//     },
//     {
//         breakpoint: 800,
//         settings: {
//             slidesToScroll: 3,
//             slidesToShow: 4
//         }
//     },
//     {
//         breakpoint: 775,
//         settings: {
//             slidesToScroll: 3,
//             slidesToShow: 3,
//             dots: false,
//             arrows: false
//         }
//     },
//     {
//         breakpoint: 750,
//         settings: {
//             slidesToScroll: 3,
//             slidesToShow: 3
//         }
//     },{
//         breakpoint: 725,
//         settings: {
//             slidesToScroll: 1,
//             slidesToShow: 2,
//             dots: false,
//             arrows: false
//         }
//     },
//     {
//         breakpoint: 700,
//         settings: {
//             slidesToScroll: 1,
//             slidesToShow: 1,
//             arrows: false
//         }
//     }],

    
// });

// // update options
// glider.setOption({
//     // options here
//   });
//   // refresh the plugin
//   glider.refresh(true);
//   // update controls
//   glider.updateControls
//   // remove an item
//   glider.removeItem(2);
//   // scroll to item 2
//   glider.scrollTo(2);
//   // scroll to a specific slide
//   glider.scrollItem(2);
//   // destroy the plugin
//   glider.destroy();

//   document.querySelector('.glider').addEventListener('glider-loaded', function(event){
//     // when loaded
//   });
//   document.querySelector('.glider').addEventListener('glider-refresh', function(event){
//     // when refreshed
//   });
//   document.querySelector('.glider').addEventListener('glider-animated', function(event){
//     // when animation completed
//   });
//   document.querySelector('.glider').addEventListener('glider-add', function(event){
//     // after an item added
//   });
//   document.querySelector('.glider').addEventListener('glider-remove', function(event){
//     // after an item removed
//   });
//   document.querySelector('.glider').addEventListener('glider-slide-hidden', function(event){
//     // when a slide is hidden
//   });
//   document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
//     // when a slide is shown
//   });
//   document.querySelector('.glider').addEventListener('glider-destroy', function(event){
//     // after destroy
//   });
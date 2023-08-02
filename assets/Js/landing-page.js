// Harmburger menu functionality
var menu = document.querySelector("#menu-bars");
var navbar = document.querySelector(".navbar");
// menu.onclick = () =>{
//     navbar.classList.toggle("active");
    // navbar.classList.toggle("active");
// }

// window.onscroll = () =>{
//     menu.classList.remove("fa-times");
    // navbar.classList.remove("active");
// }

// another try
menu.addEventListener("click", harmburger())
function harmburger(){
    menu.classList.toggle("navbar");
}




// for search button display
document.querySelector("#search-icon").onclick = () =>{
    document.querySelector("#search-form").classList.toggle("active"); 
}

document.querySelector("#close").onclick = () =>{
    document.querySelector("#search-form").classList.toggle("active"); 
} 


// FOR HOME SWIPPER

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    pagination : {
        el: ".swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    loop: true,
});


// FOR REVIEW SWIPPER 1
var swiper = new Swiper(".review-slider-1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    loop: true,
});
var swiper = new Swiper(".review-slider-2", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    loop: true,
});




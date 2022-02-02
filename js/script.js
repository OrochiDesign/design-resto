let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper('.home-slider', {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
   pagination: {
     el: ".swiper-pagination",
        clickable: true,
   },
});

var swiper = new Swiper('.food-slider', {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
    food.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = food.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
    previewContainer.style.display = 'none';
    previewBox.forEach(close =>{
        close.classList.remove('active');
    });
}

//para la galeria con otra libreria con cdn
lightGallery(document.querySelector('.gallery .gallery-container'));

var swiper = new Swiper('.menu-slider', {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
    spaceBetween: 20,
    autoHeight: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
   pagination: {
     el: ".swiper-pagination",
        clickable: true,
   },
});

var swiper = new Swiper('.blogs-slider', {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
    autoHeight: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
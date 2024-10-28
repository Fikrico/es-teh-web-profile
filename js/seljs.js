let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

// JavaScript for scroll animation
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-animation');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            element.classList.add('show');
        }
    });
});




        // Initialize Swiper for gallery
        var swiper = new Swiper('.gallery-slider', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    
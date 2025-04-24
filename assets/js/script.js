// Functionality for Header - Sidebar Toggle

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const navMenu = document.getElementById("navbar-sticky");

    toggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
    });
});


$(document).ready(function () {
    var owl = $('#owl-carousel1'); // Ensuring it only affects owl-carousel2

    owl.owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        navText: [
            "<img src='./assets/images/owl-nav-prev-btn.svg' class='prev-btn h-8 w-8 p-2 border-2 border-[#0E9AA7] bg-[#0E9AA7] rounded-full' alt='owl-nav-prev-btn'>",
            "<img src='./assets/images/owl-nav-next-btn.svg' class='next-btn h-8 w-8 p-2 border-2 border-[#0E9AA7] bg-[#0E9AA7] rounded-full' alt='owl-nav-next-btn'>"
        ],
        // autoplay: true,
        responsiveClass: true,
        responsive: {
            0: { items: 1, nav: true },
            600: { items: 3, nav: true },
            1000: { items: 4, nav: true }
        },
    });
});

$(document).ready(function () {
    var owl2 = $('#owl-carousel2'); // Ensuring it only affects owl-carousel2

    owl2.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            "<img src='./assets/images/owl-nav-prev-btn.svg' class='prev-btn h-8 w-8 p-2 border-2 border-[#0E9AA7] bg-[#0E9AA7] rounded-full' alt='owl-nav-prev-btn'>",
            "<img src='./assets/images/owl-nav-next-btn.svg' class='next-btn h-8 w-8 p-2 border-2 border-[#0E9AA7] bg-[#0E9AA7] rounded-full' alt='owl-nav-next-btn'>"
        ],
        // autoplay: true,
        responsiveClass: true,
        responsive: {
            0: { items: 1, nav: true },
            600: { items: 1, nav: true },
            1000: { items: 1, nav: true }
        },
    });
});

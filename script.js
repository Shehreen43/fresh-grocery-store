var typed = new Typed('.typing', {
    strings : ['Tomato', 'Capsicum', 'Broccoli', 'Ginger', 'Cauliflower'],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true 
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

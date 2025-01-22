document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
            header.classList.remove('not-scrolled');
        } else {
            header.classList.add('not-scrolled');
            header.classList.remove('scrolled');
        }
    });

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });
});
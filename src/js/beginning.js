document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const burguerButton = document.getElementById('burguer-button');
    const closeButton = document.getElementById('close-button');
    const mobilNav = document.querySelector('.mobile-nav');
    const navContent = document.querySelector('.nav-content');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
            header.classList.remove('not-scrolled');
        } else {
            header.classList.add('not-scrolled');
            header.classList.remove('scrolled');
        }
    });

    burguerButton.addEventListener('click', () => {
        mobilNav.classList.add('open');
        navContent.style.visibility = "hidden";
    })

    closeButton.addEventListener('click', () => {
        mobilNav.classList.remove('open');
        navContent.style.visibility = "visible";
    })
});
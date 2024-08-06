document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.section');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 1.5 &&
            rect.bottom >= 0
        );
    }

    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('fade');
        } else {
            header.classList.remove('fade');
        }

        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typed.js initialization
    var typed = new Typed(".mutiple-text", {
        strings: ["Computer Science Student", "Gamer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

const navLinks = document.querySelectorAll('.nav-link');

const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);

        sections.forEach(section => {
            section.classList.remove('active');
        });

        document.getElementById(targetId).classList.add('active');
    });
});
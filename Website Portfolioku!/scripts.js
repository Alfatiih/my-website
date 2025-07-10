document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded!');
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            gsap.to(window, {duration: 1/5, scrollTo: {y: targetElement.offsetTop, ease: "bounce.out"}});
        });
    });
});
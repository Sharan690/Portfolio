// Scroll Animation for Landing Text
window.addEventListener('scroll', function() {
    const textSection = document.querySelector('.text');
    const textPosition = textSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (textPosition < screenPosition) {
        textSection.classList.add('show');
    }
});

// Parallax Effect for Background Image
document.addEventListener('scroll', function() {
    const parallax = document.querySelector('.bg-image');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

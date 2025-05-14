window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax');
    let offset = window.pageYOffset;
    parallax.style.transform = `translateY(${offset * 0.7}px)`;
});

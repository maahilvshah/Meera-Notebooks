// Change header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Parallax Effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

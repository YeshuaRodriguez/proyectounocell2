document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        const lightbox = document.getElementById(this.dataset.target);
        lightbox.style.display = 'flex';
        lightbox.querySelector('img').src = this.src;
    });
});

document.querySelectorAll('.lightbox').forEach(lightbox => {
    lightbox.addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('close')) {
            this.style.display = 'none';
        }
    });
});

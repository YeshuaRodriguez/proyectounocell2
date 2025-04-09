let jumpCounter = 0;
let currentElement = null;

function jump(event) {
    currentElement = event.target;
    const jumpHeight = -10 + (event.clientY % 10);
    currentElement.style.transform = `translateY(${jumpHeight}px)`;
    currentElement.classList.add('jump-active');

    jumpCounter++;
    document.getElementById('counter').innerText = jumpCounter;
}

function resetJump() {
    if (currentElement) {
        currentElement.style.transform = '';
        currentElement.classList.remove('jump-active');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

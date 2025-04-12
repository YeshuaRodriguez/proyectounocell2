function toggleContent() {
    const extraContent = document.getElementById('extraContent');
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block';
    } else {
        extraContent.style.display = 'none';
    }
}

function changeColor(button) {
    const originalColor = button.style.backgroundColor;
    button.style.backgroundColor = '#28a745';
    setTimeout(() => {
        button.style.backgroundColor = originalColor;
    }, 500);
}

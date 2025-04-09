function toggleProductInfo(button) {
    const extraContent = button.nextElementSibling;
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        button.textContent = "Ocultar Información";
    } else {
        extraContent.style.display = "none";
        button.textContent = "Más Información";
    }
}

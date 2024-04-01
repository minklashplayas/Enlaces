var language = 'en'; // Variable para almacenar el idioma actual

function toggleLanguage() {
    // Cambiar entre inglés y español
    if (language === 'en') {
        language = 'es';
    } else {
        language = 'en';
    }

    // Actualizar el contenido según el idioma seleccionado
    updateContent();
}

function updateContent() {
    if (language === 'es') {
        document.getElementById('title').textContent = 'Bienvenido';
        document.getElementById('description').textContent = 'Esta es la versión en español del sitio web.';
    } else {
        document.getElementById('title').textContent = 'Welcome';
        document.getElementById('description').textContent = 'This is the English version of the website.';
    }
}

// Llamar a la función de actualización del contenido al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    updateContent();
});

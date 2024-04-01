document.addEventListener('DOMContentLoaded', function () {
    // Detectar el idioma del navegador
    var userLang = navigator.language || navigator.userLanguage;

    // Verificar si el idioma es español
    if (userLang.startsWith('es')) {
        // Cambiar el contenido a español
        document.getElementById('title').textContent = 'Bienvenido';
        document.getElementById('description').textContent = 'Esta es la versión en español del sitio web.';
    }
});

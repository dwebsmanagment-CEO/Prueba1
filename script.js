// script.js - Mensajero para cargar textos del CMS
fetch('/datos.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
        // Busca en el HTML el elemento con id "titular-magico" y le inyecta el texto
        document.getElementById('titular-magico').innerText = datos.titulo;
    })
    .catch(error => {
        console.log("Error al cargar los datos:", error);
    });

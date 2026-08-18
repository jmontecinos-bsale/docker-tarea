document.addEventListener('DOMContentLoaded', async () => {
    const textContainer = document.getElementById('response');

    try {
        const response = await fetch('/docker-api');
        const data = await response.json();

        textContainer.innerText = data.msg;
    } catch (error) {
        console.error('Error connecting to the backend', error)
        textContainer.innerText = 'Error al cargar los datos del servidor.'
    }
})
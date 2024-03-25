// Asegúrate de que este código se ejecute una vez que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Agregar eventListener al campo de entrada para detectar la tecla Enter
    const userInputElem = document.getElementById('userInput');
    userInputElem.addEventListener('keypress', handleKeypress);

    // Función para manejar la tecla Enter
    function handleKeypress(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    // Función para enviar mensajes
    async function sendMessage() {
        const sanitizedInput = userInputElem.value.replace(/[\u007F-\uFFFF]/g, ''); // Eliminar caracteres no válidos
        if (sanitizedInput.trim() === '') return; // No enviar mensajes vacíos

        displayMessage(sanitizedInput, 'user');
        userInputElem.value = ''; // Limpiar el campo de entrada

        try {
            const response = await fetch('http://localhost:11434/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "model": "wizardlm-uncensored",
                    "messages": [
                        {
                            "role": "user",
                            "content": sanitizedInput // Usar el contenido sanitizado
                           
                        }
                    ],
                    "options": {
                        "seed": 101,
                        "temperature": 0
                    },
                    "stream": false // Indicar que no deseas una respuesta en streaming
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            const assistantMessage = responseData.message.content;
            displayMessage(assistantMessage, 'system'); // Mostrar el mensaje del asistente
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            displayMessage(`Error: ${error.message}`, 'system'); // Mostrar algún mensaje de error
        }
    }

    // Función para mostrar mensajes en la interfaz del chat
    function displayMessage(message, sender) {
        const chatHistory = document.getElementById('chatHistory');
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container', `${sender}-message`);

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('message-avatar');
        // Agregar imagen predeterminada dependiendo del remitente
        avatarDiv.style.backgroundImage = `url('/static/${sender}.jpg')`;

        const messageBubble = document.createElement('div');
        messageBubble.classList.add('message-bubble');
        messageBubble.textContent = message;

        messageContainer.appendChild(avatarDiv);
        messageContainer.appendChild(messageBubble);

        chatHistory.appendChild(messageContainer);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
    // Función para mostrar mensajes en el historial de chat
function displayMessage(message, sender) {
    const chatHistory = document.getElementById('chatHistory');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container', `${sender}-message`);

    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('message-avatar');
    // Puedes poner las imágenes aquí directamente o mediante CSS
    avatarDiv.style.backgroundImage = sender === 'user' ? 'url("static/user.jpg")' : 'url("static/system.jpg")';

    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble');

    // Revisar si el mensaje contiene código
    if (message.startsWith('```') && message.endsWith('```')) {
        // Eliminar los backticks del inicio y del final
        const codeContent = message.slice(3, -3);
        const codeElement = document.createElement('pre');
        codeElement.textContent = codeContent;
        messageBubble.appendChild(codeElement);
    } else {
        messageBubble.textContent = message;
    }

    messageContainer.appendChild(avatarDiv);
    messageContainer.appendChild(messageBubble);

    chatHistory.appendChild(messageContainer);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}
function displayMessage(message, sender) {
    const chatHistory = document.getElementById('chatHistory');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container', `${sender}-message`);

    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('message-avatar');
    // Puedes poner las imágenes aquí directamente o mediante CSS
    avatarDiv.style.backgroundImage = sender === 'user' ? 'url("static/user.jpg")' : 'url("static/system.jpg")';

    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble');

    // Revisar si el mensaje contiene la sintaxis de imagen de Markdown ![Texto Alternativo](URL de la imagen)
    const markdownImageRegex = /!\[([^\]]+)\]\(([^)]+)\)/;
    const matches = message.match(markdownImageRegex);

    if (matches && matches[2]) {
        const altText = matches[1];
        const imageUrl = matches[2];
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', imageUrl);
        imageElement.setAttribute('alt', altText);
        imageElement.classList.add('chat-image');
        messageBubble.appendChild(imageElement);
    } else {
        messageBubble.textContent = message;
    }

    messageContainer.appendChild(avatarDiv);
    messageContainer.appendChild(messageBubble);

    chatHistory.appendChild(messageContainer);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}
});
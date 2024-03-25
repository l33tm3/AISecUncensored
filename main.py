from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuración CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Esto permitirá solicitudes desde cualquier origen
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")

# Ruta para la página principal
@app.get("/", response_class=HTMLResponse)
async def main():
    return """
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Interface</title>
    <link rel="stylesheet" href="/static/styles.css"> <!-- Asegúrate de que este path sea correcto -->
</head>
<body>
    <div class="chatbot-interface">
        <div class="chatbot-content">
            <div class="chatbot-header">
                <h1>GustavoGPT Interfaz Beta</h1>
                <div class="chatbot-question">
                    ¿Cómo puedo ayudarte hoy?
                </div>
            </div>
            <div class="chatbot-messages" id="chatHistory">
                <!-- Mensajes de chat aparecerán aquí -->
            </div>
            <div class="chatbot-input">
    <input type="text" id="userInput" placeholder="Escribe tu mensaje aquí..." onkeypress="handleKeypress(event)">
    <button onclick="sendMessage()">Enviar</button>
            </div>
        </div>
    </div>

    <script src="/static/scripts.js"></script>
</body>
</html>
    """

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

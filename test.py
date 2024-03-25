import requests

# Definir los datos para la solicitud
data = {
    "model": "llama2",
    "prompt": "Why is the sky blue?",
    "stream": False  # Cambia a True si deseas una respuesta en streaming
}

# Realizar la solicitud POST a la URL del endpoint de generación
url = "http://localhost:11434/api/generate"
response = requests.post(url, json=data)

# Procesar la respuesta
if response.status_code == 200:
    result = response.json()
    print("Respuesta:", result["response"])
    print("Duración total:", result["total_duration"])
    # Agrega aquí cualquier otra información que desees mostrar
else:
    print("Error:", response.text)
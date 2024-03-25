from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from jinja2 import Environment, FileSystemLoader
import csv

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

def get_model_options():
    model_options = []
    with open("static/model.csv", newline='') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            model_options.append(row[0])
    return model_options

# Ruta para la página principal
@app.get("/", response_class=HTMLResponse)
async def main(request: Request):
    model_options = get_model_options()
    
    # Cargar la plantilla utilizando Jinja2
    env = Environment(loader=FileSystemLoader("static"))
    template = env.get_template("index.html")
    
    # Renderizar la plantilla con las opciones de modelo
    content = template.render(model_options=model_options)
    
    return HTMLResponse(content)

# Ruta para manejar la selección de modelo
@app.post("/select_model")
async def select_model(request: Request):
    form = await request.form()
    selected_model = form.get("selected_model")
    if selected_model:
        with open("static/model.csv", newline='') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                if row[0] == selected_model:
                    description = row[1]
                    updated = row[2]
                    return {"description": description, "updated": updated}
            return {"error": "Modelo no encontrado"}
    else:
        return {"error": "No se proporcionó ningún modelo seleccionado"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
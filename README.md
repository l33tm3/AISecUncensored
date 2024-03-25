# GustavoGPT Chat Interface
<div align="center">
  <img alt="ollama" height="350px" src="img\screen2.webp">
</div>

# AISecUncensored 
Talk with Ollama LLM -> Uncensured version 

## Overview

This project is a simple chat interface that utilizes FastAPI as a backend to serve a chatbot service. It allows users to send messages to an AI model and receive responses.

<div align="center">
  <img alt="ollama" height="500px" src="img\Screen1.png">
</div>


## Power By 
<div align="center">
  <img alt="ollama" height="200px" src="https://github.com/jmorganca/ollama/assets/3325447/0d0b44e2-8f4a-4e99-9b52-a5c1c741c8f7">
  <img alt="ollama" height="200px" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/FastAPI_b.jpg">
  <img alt="ollama" height="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png">
</div>

## Features

- Interactive chat interface with real-time messaging.
- Separation of user and system messages for better clarity.
- Markdown rendering for certain message types like images.
- Fully responsive design for desktop and mobile browsers.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: FastAPI (Python)
- **Model**: All's Ollama API Sever Rest

## New Features:
1. Friendly interface

## Working Features
1. Vision Upload Images (Soon)
2. Options Temperature and another configs
3. ChatGPT History Similiraty
4. Select Model avaible from Ollama Models Store

## Installation and Setup

To get the project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/l33tm3/AISecUncensored.git
   ```

2. Navigate to the project directory:
   ```bash
   cd AISecUncensored
   ```

3. Install the required Python packages:
   ```bash
   pip install fastapi uvicorn
   ```

4. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

The `--reload` flag enables auto-reloading of the server on file changes.

## Usage

Once the server is running, you can access the chat interface by going to `http://127.0.0.1:8000` in your web browser. ( Make Sure do you have a Ollama server install here  `https://ollama.com/`)

Type your message into the input field and press "Enter" or click the "Enviar" button to send it. The response from the system will appear in the chat history above.

## Customization

You can customize the frontend by editing the `static/styles.css` file for styles and `static/scripts.js` for chat logic.

## Deployment

For deployment, you can containerize the application with Docker or deploy it to a cloud service provider like Heroku.

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change or add.

If you find errors, don't forget to tag us in the discussion.


## License

This project is licensed under the MIT License - see the LICENSE file for details.
Ok
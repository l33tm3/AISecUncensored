# GustavoGPT Chat Interface

## Overview

This project is a simple chat interface that utilizes FastAPI as a backend to serve a chatbot service. It allows users to send messages to an AI model and receive responses.

## Features

- Interactive chat interface with real-time messaging.
- Separation of user and system messages for better clarity.
- Markdown rendering for certain message types like images.
- Fully responsive design for desktop and mobile browsers.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: FastAPI (Python)

## Installation and Setup

To get the project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-github-username/gustavogpt-chat-interface.git
   ```

2. Navigate to the project directory:
   ```bash
   cd gustavogpt-chat-interface
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

Once the server is running, you can access the chat interface by going to `http://127.0.0.1:8000` in your web browser.

Type your message into the input field and press "Enter" or click the "Enviar" button to send it. The response from the system will appear in the chat history above.

## Customization

You can customize the frontend by editing the `static/styles.css` file for styles and `static/scripts.js` for chat logic.

## Deployment

For deployment, you can containerize the application with Docker or deploy it to a cloud service provider like Heroku.

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change or add.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
document.getElementById("modelSelect").addEventListener("change", function() {
    var selectedModel = this.value;
    fetch('/select_model', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'selected_model=' + selectedModel,
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error(data.error);
        } else {
            document.getElementById("description").innerText = data.description;
            document.getElementById("updated").innerText = data.updated;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
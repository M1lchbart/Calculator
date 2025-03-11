if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js') // Pfad zum Service Worker
    .then(registration => {
        console.log('Service Worker erfolgreich registriert:', registration);
    })
    .catch(error => {
        console.error('Service Worker Registrierung fehlgeschlagen:', error);
    });
}

function appendOperation(operation) {
    document.getElementById("resultArea").innerHTML += operation;
}

function calculateResult() {
    let container = document.getElementById("resultArea")
    let result = eval(container.innerHTML);
    container.innerHTML = result;
}

function deleteLast() {
    let container = document.getElementById("resultArea")
    container.innerHTML = container.innerHTML.slice(0, -1)
}
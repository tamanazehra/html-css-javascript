function safetyCheck() {

    fetch('https://hdv-content-safety.cognitiveservices.azure.com/contentsafety/text:analyze?api-version=2023-10-01', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Ocp-Apim-Subscription-Key': 'e8ed54f5de3e44a6966ee76b79b89a77' 
        },
        body: JSON.stringify({
            text: document.getElementById("sampleText").value,
            categories: ["Hate", "Sexual", "SelfHarm", "Violence"]
         })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("resultContainer").innerText = JSON.stringify(data);
    })
    .catch(error => {
        document.getElementById("resultContainer").innerText = "Error: " + error.message;
    });
}

document.getElementById('symptom-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const symptom = document.getElementById('symptom').value.trim();
    if (symptom) {
        getHerbalSolution(symptom);
    }
});

async function getHerbalSolution(symptom) {
    try {
        const response = await fetch('http://localhost:3000/getSolution', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ symptom })
        });

        const data = await response.json();
        displayResult(data.solution);
    } catch (error) {
        console.error('Error fetching herbal solution:', error);
        displayResult('Error fetching herbal solution. Please try again.');
    }
}

function displayResult(result) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>${result}</p>`;
}

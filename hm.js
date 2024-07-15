const http = require('http');
const url = require('url');

const port = 3000;

// Mock data for herbal remedies based on symptoms
const herbalRemedies = {
    headache: ['Peppermint Tea', 'Lavender Essential Oil', 'Ginger Tea'],
    cold: ['Echinacea', 'Ginger Tea', 'Garlic'],
    anxiety: ['Chamomile Tea', 'Lavender', 'Valerian Root'],
    insomnia: ['Chamomile Tea', 'Lavender Oil', 'Valerian Root'],
    stomachache: ['Ginger', 'Peppermint', 'Fennel']
};

// Function to handle incoming requests
const requestHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    const path = parsedUrl.pathname;

    if (req.method === 'GET' && path === '/get-remedies') {
        if (query.symptom) {
            const symptom = query.symptom.toLowerCase();
            const remedies = herbalRemedies[symptom];
            if (remedies) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ symptom: symptom, remedies: remedies }));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'No remedies found for the given symptom.' }));
            }
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Please provide a symptom.' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Endpoint not found.' }));
    }
};

// Create and start the server
const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const express = require('express');
const app = express();
const port = 3000;

// Mock data for herbal remedies based on symptoms
const herbalRemedies = {
    headache: ['Peppermint Tea', 'Lavender Essential Oil', 'Ginger Tea'],
    cold: ['Echinacea', 'Ginger Tea', 'Garlic'],
    anxiety: ['Chamomile Tea', 'Lavender', 'Valerian Root'],
    insomnia: ['Chamomile Tea', 'Lavender Oil', 'Valerian Root'],
    stomachache: ['Ginger', 'Peppermint', 'Fennel']
};

// Middleware to serve static files
app.use(express.static('public'));

// API endpoint to get remedies based on symptoms
app.get('/get-remedies', (req, res) => {
    const symptom = req.query.symptom ? req.query.symptom.toLowerCase() : null;
    if (symptom) {
        const remedies = herbalRemedies[symptom];
        if (remedies) {
            res.json({ symptom, remedies });
        } else {
            res.status(404).json({ message: 'No remedies found for the given symptom.' });
        }
    } else {
        res.status(400).json({ message: 'Please provide a symptom.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

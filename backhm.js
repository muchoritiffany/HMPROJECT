const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const herbalSolutions = {
    headache: 'Peppermint tea or lavender oil',
    cough: 'Honey and lemon tea',
    indigestion: 'Ginger tea or peppermint',
    stress: 'Chamomile tea or lavender oil',
    // Add more symptoms and solutions here
};

app.get('/', (req, res) => {
    res.send('Welcome to the Herbal Solutions API');
});

app.post('/getSolution', (req, res) => {
    const symptom = req.body.symptom.toLowerCase();
    const solution = herbalSolutions[symptom] || 'No herbal solution found for this symptom.';
    res.json({ solution });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

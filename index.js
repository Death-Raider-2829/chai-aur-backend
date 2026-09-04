require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('HELLO FROM RENDER');
});

app.get('/test', (req, res) => {
    res.status(200).json({
        message: 'This is definitely my server',
        port: port
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/docker-api', (req, res) => {
    res.json({msg: '¡Hola! Saludos desde el backend :)'})
});

app.listen(3000, () => console.log('Backend running on port 3000'));
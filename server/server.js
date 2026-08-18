const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.SERVER_PORT || 3000; 

app.use(cors());

app.get('/docker-api', (req, res) => {
    res.json({msg: '¡Hola! Saludos desde el backend :)'})
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
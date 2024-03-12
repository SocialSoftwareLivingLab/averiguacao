const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const { client, dbConfig } = require('./dbConfig');
const {
    usuario,
    banca,
    processo,
    candidato
} = require('./api');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

client.connect();

app.use('/api/usuario', usuario);
app.use('/api/banca', banca);
app.use('/api/processo', processo);
app.use('/api/candidato', candidato);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

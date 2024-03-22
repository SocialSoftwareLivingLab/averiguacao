const express = require('express');
const bodyParser = require('body-parser');
const apiOperations = require('db-ops/candidato');

const router = express.Router();
router.use(bodyParser.json());

// CRUD APIs for "candidato" table
router.get('/', async (req, res) => {
  const candidatos = await apiOperations.readCandidatos();
  res.json(candidatos);
});

router.get('/:id', async (req, res) => {
  const candidatoId = parseInt(req.params.id);
  const candidato = await apiOperations.readCandidatoById(candidatoId);

  if (candidato) {
    res.json(candidato);
  } else {
    res.status(404).json({ error: 'Candidato não encontrado' });
  }
});

router.post('/', async (req, res) => {
  const newCandidato = req.body;
  const createdCandidato = await apiOperations.createCandidato(newCandidato);
  res.status(201).json(createdCandidato);
});

router.put('/:id', async (req, res) => {
  const candidatoId = parseInt(req.params.id);
  const updatedCandidato = req.body;

  const existingCandidato = await apiOperations.readCandidatoById(candidatoId);

  if (existingCandidato) {
    const updatedCandidatoResult = await apiOperations.updateCandidato(candidatoId, updatedCandidato);
    res.json(updatedCandidatoResult);
  } else {
    res.status(404).json({ error: 'Candidato não encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  const candidatoId = parseInt(req.params.id);
  const deletedCandidato = await apiOperations.deleteCandidato(candidatoId);

  if (deletedCandidato) {
    res.json(deletedCandidato);
  } else {
    res.status(404).json({ error: 'Candidato não encontrado' });
  }
});

module.exports = router;
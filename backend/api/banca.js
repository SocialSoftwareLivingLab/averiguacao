const express = require('express');
const bodyParser = require('body-parser');
const apiOperations = require('db-ops/banca');

const router = express.Router();
router.use(bodyParser.json());

// CRUD APIs for "banca" table
router.get('/', async (req, res) => {
  const bancas = await apiOperations.readBancas();
  res.json(bancas);
});

router.get('/:id', async (req, res) => {
  const bancaId = parseInt(req.params.id);
  const banca = await apiOperations.readBancaById(bancaId);

  if (banca) {
    res.json(banca);
  } else {
    res.status(404).json({ error: 'Banca não encontrado' });
  }
});

router.post('/', async (req, res) => {
  const newBanca = req.body;
  const createdBanca = await apiOperations.createBanca(newBanca);
  res.status(201).json(createdBanca);
});

router.put('/:id', async (req, res) => {
  const bancaId = parseInt(req.params.id);
  const updatedBanca = req.body;

  const existingBanca = await apiOperations.readBancaById(bancaId);

  if (existingBanca) {
    const updatedBancaResult = await apiOperations.updateBanca(bancaId, updatedBanca);
    res.json(updatedBancaResult);
  } else {
    res.status(404).json({ error: 'Banca não encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  const bancaId = parseInt(req.params.id);
  const deletedBanca = await apiOperations.deleteBanca(bancaId);

  if (deletedBanca) {
    res.json(deletedBanca);
  } else {
    res.status(404).json({ error: 'Banca não encontrado' });
  }
});

module.exports = router;
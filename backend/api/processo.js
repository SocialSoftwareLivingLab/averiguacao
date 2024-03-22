const express = require('express');
const bodyParser = require('body-parser');
const apiOperations = require('db-ops/processo');

const router = express.Router();
router.use(bodyParser.json());

// CRUD APIs for "processo" table
router.get('/', async (req, res) => {
  const processos = await apiOperations.readProcessos();
  res.json(processos);
});

router.get('/:id', async (req, res) => {
  const processoId = parseInt(req.params.id);
  const processo = await apiOperations.readProcessoById(processoId);

  if (processo) {
    res.json(processo);
  } else {
    res.status(404).json({ error: 'Processo não encontrado' });
  }
});

router.post('/', async (req, res) => {
  const newProcesso = req.body;
  const createdProcesso = await apiOperations.createProcesso(newProcesso);
  res.status(201).json(createdProcesso);
});

router.put('/:id', async (req, res) => {
  const processoId = parseInt(req.params.id);
  const updatedProcesso = req.body;

  const existingProcesso = await apiOperations.readProcessoById(processoId);

  if (existingProcesso) {
    const updatedProcessoResult = await apiOperations.updateProcesso(processoId, updatedProcesso);
    res.json(updatedProcessoResult);
  } else {
    res.status(404).json({ error: 'Processo não encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  const processoId = parseInt(req.params.id);
  const deletedProcesso = await apiOperations.deleteProcesso(processoId);

  if (deletedProcesso) {
    res.json(deletedProcesso);
  } else {
    res.status(404).json({ error: 'Processo não encontrado' });
  }
});

module.exports = router;
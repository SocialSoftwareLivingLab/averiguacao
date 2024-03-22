const express = require('express');
const bodyParser = require('body-parser');
const apiOperations = require('db-ops/usuario');

const router = express.Router();
router.use(bodyParser.json());

// CRUD APIs for "usuario" table
router.get('/', async (req, res) => {
  const usuarios = await apiOperations.readUsuarios();
  res.json(usuarios);
});

router.get('/:id', async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  const usuario = await apiOperations.readUsuarioById(usuarioId);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

router.post('/', async (req, res) => {
  const newUsuario = req.body;
  const createdUsuario = await apiOperations.createUsuario(newUsuario);
  res.status(201).json(createdUsuario);
});

router.put('/:id', async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  const updatedUsuario = req.body;

  const existingUsuario = await apiOperations.readUsuarioById(usuarioId);

  if (existingUsuario) {
    const updatedUsuarioResult = await apiOperations.updateUsuario(usuarioId, updatedUsuario);
    res.json(updatedUsuarioResult);
  } else {
    res.status(404).json({ error: 'Usuario não encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  const deletedUsuario = await apiOperations.deleteUsuario(usuarioId);

  if (deletedUsuario) {
    res.json(deletedUsuario);
  } else {
    res.status(404).json({ error: 'Usuario não encontrado' });
  }
});

module.exports = router;
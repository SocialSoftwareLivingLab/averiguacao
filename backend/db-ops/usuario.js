async function createUsuario(client, usuario) {
  const result = await client.query('INSERT INTO usuario(nome, instituto, setor) VALUES ($1, $2, $3) RETURNING *', [usuario.nome, usuario.instituto, usuario.setor]);
  return result.rows[0];
}

async function readUsuarios(client) {
  const result = await client.query('SELECT * FROM usuario');
  return result.rows;
}

async function readUsuarioById(client, id) {
  const result = await client.query('SELECT * FROM usuario WHERE id = $1', [id]);
  return result.rows[0];
}

async function updateUsuario(client, id, updatedUsuario) {
  const result = await client.query('UPDATE usuario SET nome = $1, instituto = $2, setor = $3 WHERE id = $4 RETURNING *', [
    updatedUsuario.nome,
    updatedUsuario.instituto,
    updatedUsuario.setor,
    id,
  ]);
  return result.rows[0];
}

async function deleteUsuario(client, id) {
  const result = await client.query('DELETE FROM usuario WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
}

module.exports = {
  createUsuario,
  readUsuarios,
  readUsuarioById,
  updateUsuario,
  deleteUsuario
};

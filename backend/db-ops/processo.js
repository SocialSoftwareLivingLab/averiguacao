async function createProcesso(client, processo) {
    const result = await client.query('INSERT INTO processo(nome, instituto, setor) VALUES ($1, $2, $3) RETURNING *', [processo.nome, processo.instituto, processo.setor]);
    return result.rows[0];
  }
  
  async function readProcessos(client) {
    const result = await client.query('SELECT * FROM processo');
    return result.rows;
  }
  
  async function readProcessoById(client, id) {
    const result = await client.query('SELECT * FROM processo WHERE id = $1', [id]);
    return result.rows[0];
  }
  
  async function updateProcesso(client, id, updatedProcesso) {
    const result = await client.query('UPDATE processo SET nome = $1, instituto = $2, setor = $3 WHERE id = $4 RETURNING *', [
      updatedProcesso.nome,
      updatedProcesso.instituto,
      updatedProcesso.setor,
      id,
    ]);
    return result.rows[0];
  }
  
  async function deleteProcesso(client, id) {
    const result = await client.query('DELETE FROM processo WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
  
  module.exports = {
    createProcesso,
    readProcessos,
    readProcessoById,
    updateProcesso,
    deleteProcesso
  };
  
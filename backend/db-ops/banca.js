async function createBanca(client, banca) {
    const result = await client.query('INSERT INTO banca(nome, instituto, setor) VALUES ($1, $2, $3) RETURNING *', [banca.nome, banca.instituto, banca.setor]);
    return result.rows[0];
  }
  
  async function readBancas(client) {
    const result = await client.query('SELECT * FROM banca');
    return result.rows;
  }
  
  async function readBancaById(client, id) {
    const result = await client.query('SELECT * FROM banca WHERE id = $1', [id]);
    return result.rows[0];
  }
  
  async function updateBanca(client, id, updatedBanca) {
    const result = await client.query('UPDATE banca SET nome = $1, instituto = $2, setor = $3 WHERE id = $4 RETURNING *', [
      updatedBanca.nome,
      updatedBanca.instituto,
      updatedBanca.setor,
      id,
    ]);
    return result.rows[0];
  }
  
  async function deleteBanca(client, id) {
    const result = await client.query('DELETE FROM banca WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
  
  module.exports = {
    createBanca,
    readBancas,
    readBancaById,
    updateBanca,
    deleteBanca
  };
  
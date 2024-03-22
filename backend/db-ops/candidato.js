async function createCandidato(client, candidato) {
    const result = await client.query('INSERT INTO candidato(nome, instituto, setor) VALUES ($1, $2, $3) RETURNING *', [candidato.nome, candidato.instituto, candidato.setor]);
    return result.rows[0];
  }
  
  async function readCandidatos(client) {
    const result = await client.query('SELECT * FROM candidato');
    return result.rows;
  }
  
  async function readCandidatoById(client, id) {
    const result = await client.query('SELECT * FROM candidato WHERE id = $1', [id]);
    return result.rows[0];
  }
  
  async function updateCandidato(client, id, updatedCandidato) {
    const result = await client.query('UPDATE candidato SET nome = $1, instituto = $2, setor = $3 WHERE id = $4 RETURNING *', [
      updatedCandidato.nome,
      updatedCandidato.instituto,
      updatedCandidato.setor,
      id,
    ]);
    return result.rows[0];
  }
  
  async function deleteCandidato(client, id) {
    const result = await client.query('DELETE FROM candidato WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
  
  module.exports = {
    createCandidato,
    readCandidatos,
    readCandidatoById,
    updateCandidato,
    deleteCandidato
  };
  
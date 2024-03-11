CREATE TABLE processo (
    id SERIAL PRIMARY KEY,
    id_banca INT REFERENCES banca(id) ON DELETE CASCADE,
    candidato_ids INT[] NOT NULL
);
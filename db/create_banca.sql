CREATE TABLE banca (
    id SERIAL PRIMARY KEY,
    id_presidente INT REFERENCES usuario(id) ON DELETE CASCADE
);
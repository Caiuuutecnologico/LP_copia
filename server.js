const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'neondb_owner',
  host: 'ep-curly-shadow-acpfh75q-pooler.sa-east-1.aws.neon.tech',
  database: 'neondb',
  password: 'npg_7ikSRte2Bahy',
  port: 5432,
  ssl: { rejectUnauthorized: false }
});


// CONFIGURAÇÃO DO DOTENV
dotenv.config();

// CONFIGURAÇÃO DO EXPRESS
const app = express();

// CONFIGURAÇÃO PARA USAR JSON NAS REQUISIÇÕES
app.use(express.json());

// CONFIGURAÇÃO DA PORTA
const PORT = process.env.PORT || 3000;

// MIDDLEWARE DE CORS
app.use(cors());

// INICIALIZAÇÃO DO SERVIDOR
app.listen(PORT, function () {
  console.log(`Servidor rodando em http://localhost:${PORT}?utm_source=instagram&utm_medium=social&utm_campaign=lancamento`);
});

// CONFIGURAÇÃO PARA RODAR O FRONT NO SERVIDOR
app.use(express.static(path.join(__dirname, "public")));

// TESTE DE REQUISIÇÃO NO SERVIDOR
app.get('/teste', async function(req, res) {
try {
    return res.json({resultado: 4444444444});
} catch (erro) {
    return res.json({erro: "Problemas com o servidor"})
}
}
);
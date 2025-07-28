const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const path = require('path');

// CONFIGURAÇÃO DO DOTENV
dotenv.config();

// CONFIGURAÇÃO DO EXPRESS
const app = express();

// CONFIGURAÇÃO DA PORTA
const PORT = process.env.PORT || 3000;

// Middleware DE CORS
app.use(cors());

// INICIALIZAÇÃO DO SERVIDOR
app.listen(PORT, function () {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
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

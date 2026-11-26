const express = require('express');
const sequelize = require('../src/config/banco');
//const usuario = require('../src/modelo/Usuario');
const telefone = require('../src/modelo/Telefone');
const solicitacao = require('../src/modelo/Solicitacao');
const objeto = require('../src/modelo/Objeto');
const local = require('../src/modelo/Local');
const etiqueta = require('../src/modelo/Etiqueta');
const EtiquetaObjeto = require('../src/modelo/Etiqueta_Objeto');
const categoria = require('../src/modelo/Categoria');
//const associacoes = require('../src/modelo/Associacoes');

const app = express();
const porta = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    let UsuarioDig = req.body;
    console.log(UsuarioDig);
    res.send('Dados recebidos');
});

class Login {
    UsuarioName;
    #senha;
    constructor(n, p) {
        this.UsuarioName = n;
        this.#senha = p;
    }
}

const login = new Login('than', 123);
console.log(login);

sequelize.sync().then(() => {
    console.log(`Banco de dados conectado com sucesso!`);

    app.listen(porta, () => {
        console.log(`Example app listening on port ${porta}`);
    });
});

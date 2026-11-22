const Usuario = require('./Usuario');
const Telefone = require('./Telefone');
const Categoria= require('./Categoria');
const Local = require('./Local');
const Etiqueta = require('./Etiqueta');
const Objeto = require('./Objeto');
const Solicitacao = require('./Solicitacao');

// USUARIO E TELEFONE
Usuario.hasMany(Telefone, {
    foreignKey: 'CPF_usuario',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Telefone.belongsTo(Usuario);

// LOCAL E OBJETO
Local.hasMany(Objeto, {
    foreignKey: 'id_local',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Objeto.BelongsTo(Local);

//CATEGORIA E OBJETO
Categoria.hasMany(Objeto, {
    foreignKey: 'id_categoria',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Objeto.BelongsTo(Categoria);

//ETIQUETA E OBJETO
Etiqueta.BelongsTo(Objeto, {
    through: 'Etiqueta_objeto'
});

Objeto.BelongsTo(Categoria,{
    through: 'Etiqueta_objeto'
});

//SOLICITACAO COM OBJETO E USUARIO
Objeto.hasMany(Solicitacao, {
    foreignKey: 'id_objeto',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Usuario.hasMany(Solicitacao, {
    foreignKey: 'CPF_usuario',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Solicitacao.BelongsTo(Objeto, Usuario);


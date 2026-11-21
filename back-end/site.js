import express from 'express'
import sequelize from '../src/config'
import usuario from '../src/modelo/Usuario'
import telefone from '../src/modelo/Telefone'
import solicitacao from '../src/modelo/Solicitacao'
import objeto from '../src/modelo/Objeto'
import local from '../src/modelo/Local'
import etiqueta from '../src/modelo/Etiqueta' 
import Etiqueta_Objeto from '../src/modelo/Etiqueta_Objeto'
import categoria from '../src/modelo/Categoria'
import associacoes from '../src/modelo/Associacoes'

const app=express()
const porta=3000

app.get('/')

import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

 

class Conexao { 
    
    static async conexaoBanco () {
    const banco= await open({
        filename : '../banco/banco.db',
        driver : sqlite3.Database
    })
    return banco
}
static async CriarTabela(NomeTBL){
    const banco= await this.conexaoBanco()
    const criando= await banco.exec(`CREATE TABLE IF NOT EXISTS ${NomeTBL.toUpperCase()} (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME VARCHAR (60))`)
}
static async InserirColuna(NomeTabela,NomeColuna,TipoColuna){
    const banco =await this.conexaoBanco()
    try{const atualizando = await banco.exec(`ALTER TABLE ${NomeTabela} ADD COLUMN ${NomeColuna.toUpperCase()} ${TipoColuna} `)}
    catch(error){
        console.log.error(error)
    }
}
 }

 export {Conexao}
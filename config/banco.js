import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

 export async function conexaoBanco () {
    const bb= await open({
        filename : './banco/banco.db',
        driver : sqlite3.Database
    })
    return bb
}

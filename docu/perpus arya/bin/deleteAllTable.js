const db = require('../config/connection');

let del = async (db)=>{
    try {
        await db.drop()
        console.log('Sudah terhapus semua table nya ~');
    } catch (error) {
        console.error('Ada error gan: '+error);
    }
}

del(db)
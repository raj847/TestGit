const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('latihanorm','postgres','gautama123',{
    host: 'localhost',
    port:1234,
    dialect: 'postgres'
});

module.exports = sequelize;

// let uji = async (db)=>{
//     try {
//         await db.authenticate();
//         console.log('Berhasil');
//     } catch (err) {
//         console.error('Gak berhasil gensg' + err);
//     }
// }

// uji(sequelize);
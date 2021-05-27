//inisialisasi pg
const {Client} = require('pg');
//make a connection (Client)
const client = new Client({
    user:'postgres',
    host:'localhost',
    database:'latperpustakaan',
    password:'gautama890',
    port:5432
});
client.connect()

module.exports = client;
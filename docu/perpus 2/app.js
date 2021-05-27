//inisialisasi express
const express = require('express')
const app = express();
//pembacaan + pengarahan file router
const router = require('./router')
//agar bisa membaca request
 // for parsing application/json
app.use(express.json())
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false })) 

//semua yang endpoint mengandung / akan dicheck dahulu melalui middleware (use)
//jika sudah dicheck maka langsung arahkan ./router
app.use('/',router);

//jika path tidak ada maka,
app.use((req,res,next)=>{
    res.status(404).send('Maaf path tidak ada ~');
});

app.listen(3000)
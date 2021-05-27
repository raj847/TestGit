const express = require('express');
const app = express()

const routers = require('./routers')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',routers)

app.use((req,res,next)=>{
    res.status(404).json({status: 'Path not found'})
})

app.listen(3000,()=>{
    console.log('Berhasil connect ke 3000');
})
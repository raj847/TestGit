//inisialisasikan express + atur routenya
const express = require('express')
const route = express.Router()
//agar membaca controller
const controlBook = require('../controllers/controlBook')
//inisialisasikan json and urlencoded

//mengarahkan menuju endpoint
route.get('/books',controlBook.readBook)
route.post('/books',controlBook.createBook)
route.put('/books/:id',controlBook.updateBook)
route.get('/books/search?',controlBook.readFromName)
route.delete('/books/:id',controlBook.deleteBookId)
module.exports = route;
const express = require('express');
const route = express.Router()

const controlBook = require('../controllers/book')
route.get('/books',controlBook.readAllBooks)
route.post('/books',controlBook.createBook)
route.put('/books/:id',controlBook.updateReturnBook)
route.get('/books/search?',controlBook.readBooksFromAuthor)
route.delete('/books/:id',controlBook.deleteBooksFromID)

module.exports = route;
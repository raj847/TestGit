//membuat akses dengan database
const db = require('../config/connection')

class ModelBook{
    constructor(p){
        this.author = p.author;
        this.title = p.title;
        this.borName = p.borName;
        this.pubYear = p.pubYear;
        this.isReturn = p.isReturn;
        this.borDate = p.borDate;
        this.retDate = p.borDate;
    }
    static readBook(){
        return new Promise((approve,reject)=>{
            let query = 'SELECT * FROM books;'
            db.query(query,(err,data)=>{
                (err)?reject(err):approve(data.rows)
            })
        })
    }
    static insertBook(p){
        // console.log(p);
        return new Promise((approve,reject)=>{
            let query = `INSERT INTO books(author,title,borrowed_name,published_year,is_returned,borrowed_date,returned_date) VALUES ($1,$2,$3,$4,$5,$6,$7);`
            let value = [p.author,p.title,p.borName,p.pubYear,p.isReturn,p.borDate,p.retDate];
            db.query(query,value,(err,data)=>{
                (err)?reject(err):approve(data)
            })
        })
    }
    static updateBook(p,id){
        return new Promise((approve,reject)=>{
            let query = `UPDATE books SET is_returned = $1, borrowed_date = $2, returned_date = $3 WHERE id = $4;`;
            let value = [p.isReturn,p.borrowedDate,p.returnDate,id]
            db.query(query,value,(err,data)=>{
                (err)?reject(err):approve(data)
            })
        })
    }
    static readFromName(name){
        return new Promise((approve,reject)=>{
            let query = `SELECT * FROM books WHERE borrowed_name = $1`;
            let value = [name];
            db.query(query,value,(err,data)=>{
                (err)?reject(err):approve(data.rows)
            })
        })
    }
    static deleteBook(id){
        return new Promise((approve, reject)=>{
            let query = `DELETE FROM books WHERE id = $1`;
            let value = [id]
            db.query(query,value,(err,data)=>{
                (err)?reject(err):approve(data)
            })
        })
    }
}
module.exports = ModelBook
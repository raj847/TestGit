const {Op} = require('sequelize')
const modelBook = require('../models/book');

class ControlBook{
    static async createBook(req,res){
        try {
            await modelBook.create({
                author:req.body.author,
                title:req.body.title,
                is_returned:req.body.isReturn
            });
            res.status(200).json({status: 'Sukses'})
        } catch (error) {
            res.status(500).json({status: 'ada yang salah'})
        }
    }

    static async updateReturnBook(req,res){
        let idBooks = req.params.id
        if(!idBooks){
            res.status(400).json({status: 'ID is Empty'})
        }else{
            try {
                let isIDFound = await modelBook.findAll({
                    where:{
                        id:idBooks
                    }
                })
                if(!isIDFound.length){
                    res.status(404).json({status: 'ID not Found'})
                }else{
                    await modelBook.update({is_returned:req.body.isReturn},{
                        where:{
                            id:idBooks
                        }
                    })
                    res.status(200).json({status: 'berhasil update'});
                }
            }
            catch (error) {
                res.status(500).json({status:'Ada yang salah'})
            }
        }
    }

    static async readAllBooks(req,res){
        try {
            let data = await modelBook.findAll({order:[['id','ASC']]})
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({status:"Ada kesalahan"})
        }
    }

    static async readBooksFromAuthor(req,res){
        try {
            let data = await modelBook.findAll({
                where:{
                    author:req.query.author
                }
            })
            res.status(200).json(data)
        } catch (error) {
            res.status(500).status({status:'ada masalah'})
        }
    }
    
    static async deleteBooksFromID(req,res){
        let idBooks = req.params.id
        try{
            await modelBook.destroy({
                where:{
                    id:idBooks
                }
            })
            res.status(200).json({status: 'Data berhasil dihapus'})
        }catch{
            res.status(500).json({status:'Ada yang salah'})
        }
    }
}

module.exports = ControlBook;
const modelBook = require('../models/modelBook')

class ControlBook{
    static async readBook(req,res){
        try {
            res.status(200).json(await modelBook.readBook())
        } catch (error) {
            console.log(error);
            //500 untuk internal server error
            res.status(500).send(error)
        }
    }
    static async createBook(req,res){
        // console.log(req);
        try {
            let objReq = new modelBook({
                author:req.body.author,
                title:req.body.title,
                borName:req.body.borName,
                pubYear:req.body.pubYear,
                isReturn:req.body.isReturn,
                borDate:req.body.borDate,
                retDate:req.body.retDate
            });
            // console.log(objReq);

            //form untuk file
            //form-uncode untuk json / data dari form
            await modelBook.insertBook(objReq);
            res.status(200).send('sukses')
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
    static async updateBook(req,res){
        try {
            await modelBook.updateBook({
                isReturn:req.body.isReturn,
                borrowedDate:req.body.borrowedDate,
                returnDate:req.body.returnDate
            },req.params.id);
            res.status(200).send('Sukses')
        } catch (error) {
            res.status(500).send(error)
        }
    }
    static async readFromName(req,res){
        try {
            res.status(200).json(await modelBook.readFromName(req.query.name))
        } catch (err) {
            res.status(500).send(err)
        }
    }
    static async deleteBookId(req,res){
        try{
            await modelBook.deleteBook(req.params.id);
            res.status(200).json({status:'sukses'})
        }catch(err){
            res.status(500).send(err)
        }
    }
}

module.exports = ControlBook;
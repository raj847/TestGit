let mtiket = require('../model/mtiket');
let view = require('../view/view');


class ControllerTiket{

    static getAllMovie(){
        mtiket.getMovie(function(err, data) {
            if(err){
                view.tampilPesan(err);
            }else{
                view.tampilPesan('movie list');
                view.tampilPesan('=======');
                for(let i=0; i<data.length; i++){
                    view.tampilPesan(`[${data[i].status}] ${data[i].name} (${data[i].jumlah}/${data[i].maxseats})`);
                }
            }
        })
    }

    static closeMovie(id){
        mtiket.updateField({id, field:"status", value:"CLOSE" }, function(err, data) {
            if(err){
                view.tampilPesan(err);
            }else{
                if(data.rowCount==0){
                    view.tampilPesan('ERROR');
                    view.tampilPesan('=======');
                    view.tampilPesan('Film tidak ditemukan');
                }else{
                    view.tampilPesan(`berhasil menutup film dengan id ${id}`);
                }
            }
        })
    }
    
    static buyMovie(movieId, name, phone, money, qty){ //movieId, ticketcode, customername, phonenumber
        mtiket.getDetailMovie(movieId, function(err, data) {
            if(err){
                view.tampilPesan(err);
            }else{
                if(data){
                    if(data.status != "CLOSE"){
                        if(money >= data.price*qty){
                            for(let i=0; i<qty; i++){
                                mtiket.insertMovieTikets([movieId, data.code+""+Math.floor(Math.random() * 100000), name, phone], function(err, data) {
                                    if(err){
                                        view.tampilPesan(err);
                                    }else{
                                        view.tampilPesan('SUCCESS');
                                        view.tampilPesan('=======');
                                        view.tampilPesan('Berhasil Membuat Tiket');
                                    }
                                })
                            }
                        }else{
                            view.tampilPesan('ERROR');
                            view.tampilPesan('=======');
                            view.tampilPesan(`Maaf uang anda tidak cukup untuk membeli tiket ini. harga tiket satuan film ${data.name} adalah Rp.${data.price}`);
                        }
                    }else{
                        view.tampilPesan('ERROR');
                        view.tampilPesan('=======');
                        view.tampilPesan(`Maaf film ini sudah tidak ditayangkan (sudah closed)`);
                    }
                }else{
                    view.tampilPesan('ERROR');
                    view.tampilPesan('=======');
                    view.tampilPesan(`Film dengan id ${movieId} tidak tersedia`);
                }
            }
        })
    }

    static viewMovie(movieId){
        mtiket.getDetailMovie(movieId, function(err, data) {
            if(err){
                view.tampilPesan(err);
            }else{
                if(data){
                    view.tampilPesan(`id : ${data.id}, ${data.name}`);
                    view.tampilPesan(`Ticket list :`);
                    mtiket.getListTickets(movieId, function(err, data) {
                        if(err){
                            view.tampilPesan(err);
                        }else{
                            for(let i=0; i<data.length; i++){
                                view.tampilPesan(`${i+1}. ${data[i].ticketcode} - ${data[i].customername}, contact: ${data[i].phonenumber}`)
                            }
                        }
                    })
                }else{
                    view.tampilPesan('ERROR');
                    view.tampilPesan('=======');
                    view.tampilPesan(`Film tidak ditemukan`);
                }
            }
        })
    }

    static deleteMovie(movieId){
        mtiket.deleteMovie(movieId, function(err, data) {
            if(err){
                view.tampilPesan(err);
            }else{
                if(data.rowCount != 0){
                    view.tampilPesan('SUCCESS');
                    view.tampilPesan('=======');
                    view.tampilPesan(`Film berhasil di hapus`);
                }else{
                    view.tampilPesan('ERROR');
                    view.tampilPesan('=======');
                    view.tampilPesan(`Film tidak ditemukan`);
                }
            }
        })
    }
    
}

module.exports = ControllerTiket;
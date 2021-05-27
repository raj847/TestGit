let connect = require('../connection');
let fs = require("fs");

class ModelPoliticians{
    constructor(name, party, location, grade_current){
        this.name = name;
        this.party = party;
        this.location = location;
        this.grade_current = grade_current;
    }
    
    static getMovie(cb){
        connect.query('select a.*, (select count(b.id) from "movietickets" b where a.id=b.movieid) as jumlah from "movies" a', function(err, result) {
            if(err){
                cb(err, null);
            }else{
                cb(null, result.rows);
            }
        })
    }

    static getDetailMovie(id, cb){
        connect.query(`select * from "movies" where id=${id} limit 1`, function(err, result) {
            if(err){
                cb(err, null);
            }else{
                cb(null, result.rows[0]);
            }
        })
    }

    static updateField(data, cb){
        connect.query(`UPDATE "movies" SET ${data.field}='${data.value}' WHERE id='${data.id}'`, function(err, result) {
            if(err){
                cb(err, null);
            }else{
                cb(null, result);
            }
        })
    }

    static insertMovieTikets(data, cb){
        connect.query(`INSERT INTO "movietickets" (movieId, ticketcode, customername, phonenumber) VALUES ('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}')`, function(err, result) {
            if(err){
                cb(err, null);
            }else{
                cb(null, result);
            }
        })
    }

    static getListTickets(id, cb){
        connect.query(`select * from "movietickets" where movieid='${id}'`, function(err, result) {
            if(err){
                cb(err, null);
            }else{
                cb(null, result.rows);
            }
        })
    }

    static deleteMovie(id, cb){
        connect.query(`DELETE FROM "movies" WHERE id='${id}';`, function(err, result) {
            if(err){
                cb(err, null);
            }else{
                cb(null, result);
            }
        })
    }

}



module.exports = ModelPoliticians;
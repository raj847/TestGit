const db = require('./connection')

db.query(`CREATE TABLE IF NOT EXISTS movies (
          id SERIAL PRIMARY KEY ,
          code TEXT NOT NULL,
          name TEXT NOT NULL,
          price INTEGER NOT NULL,
          maxSeats INTEGER NOT NULL,
          status TEXT NOT NULL
        )`, (err, res) => {
        if (err){
          console.log(err)
        } else {
            console.log('create table movies')
            db.query(`CREATE TABLE IF NOT EXISTS movieTickets(
                      id SERIAL PRIMARY KEY ,
                      movieId INTEGER NOT NULL,
                      ticketCode TEXT NOT NULL,
                      customerName TEXT NOT NULL,
                      phoneNumber TEXT NOT NULL,
                      FOREIGN KEY (movieId) REFERENCES movies(id) ON DELETE CASCADE
                  )`, (err, res) => {
                    if(err){
                      console.log(err.stack)
                    } else {
                      console.log('berhasil create table movie ticket')
                    }
                  })
        }
})

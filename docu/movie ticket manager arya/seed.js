const db = require("./connection");

const movieArr = [
  {
    name: "Terminator 2",
    price: 20000,
    maxSeats: 10,
    code: "TMNT",
    status: "OPEN",
    maxSeats: 8
  },
  {
    name: "Pulp Fiction",
    price: 30000,
    maxSeats: 8,
    code: "PF",
    status: "OPEN"
  },
  {
    name: "Kill Bill",
    price: 30000,
    maxSeats: 5,
    code: "KBX",
    status: "OPEN"
  },
  {
    name: "Django",
    price: 50000,
    maxSeats: 4,
    code: "DJAN",
    status: "OPEN"
  },
  {
    name: "The Chronicle of Javascript Callback",
    price: 10000,
    maxSeats: 30,
    code: "INFINITEFOX",
    status: "OPEN"
  }
];


let query = 'INSERT INTO movies (name, price, maxSeats, code, status) VALUES ($1,$2,$3,$4,$5)'

for(let i = 0; i < movieArr.length; i++){
  db.query(query, [movieArr[i].name, movieArr[i].price,  movieArr[i].maxSeats, movieArr[i].code, movieArr[i].status], (err, res) => {
    if(err){
      console.log(err.stack)
    } else {
      console.log(`data masuk`)
    }
  })
}


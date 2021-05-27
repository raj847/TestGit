const db = require('../config/connection')
const {DataTypes}= require('sequelize')

const Book = db.define('book',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    author:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    title:{
        type:DataTypes.STRING(155),
        allowNull:false
    },
    borrowed_name:{
        type:DataTypes.STRING(50),
    },
    published_year:{
        type:DataTypes.INTEGER
    },
    is_returned:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    },
    borrowed_date:{
        type:DataTypes.DATEONLY,
    },
    returned_date:{
        type:DataTypes.DATEONLY,
    }
},{
    paranoid:true
})


module.exports = Book;
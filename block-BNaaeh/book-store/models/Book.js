var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    bookName : {type : String},
    authorName : {type : String},
    noOfPages : {type : Number},
    comments : [{type : Schema.Types.ObjectId, ref :"Comment" }]
},{timestamps : true})

var Book = mongoose.model('Book', bookSchema)
module.exports = Book;

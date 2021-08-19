var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var stateSchema = new Schema({
    name : {type : String},
    country : {type : Schema.Types.ObjectId},
    population : {type : String},
    area : {type : String},
    neighbouring_states : {type : Schema.Types.ObjectId}

})
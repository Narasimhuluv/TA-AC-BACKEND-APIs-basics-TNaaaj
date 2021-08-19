var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var countrySchema = new Schema({
    name : {type : String},
    states : {type : Schema.Types.ObjectId, ref : 'State'},
    contienent : {type : String},
    population : {type : Number},
    religions : {type : String},
    neighbouring_countires :{type : Schema.Types.ObjectId, ref : 'Nei_Countries'},
    area : {type : String}

}, {timestamps : true})

var Country = mongoose.model('Country', countrySchema)
module.exports = Country;
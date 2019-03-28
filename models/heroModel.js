var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var HeroSchema = new Schema(
    {powers:[{
        id: Number,
        name: String,
        intelligence: Number,
        strength: Number,
        speed: Number,
        combat: Number,
        wealth: Number,
        image: String}]
    });


module.exports = mongoose.model('heroes', HeroSchema);
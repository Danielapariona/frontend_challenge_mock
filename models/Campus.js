const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampusSchema = new Schema({
    favorito: { type: Boolean }, 
    agencia: { type: String},
    distrito: { type: String},
    provincia: { type: String},
    departamento: { type: String},
    direccion: { type: String},
    lat: { type: Number},
    lon: { type: Number}
});

module.exports = Campus = mongoose.model('Campus', CampusSchema);
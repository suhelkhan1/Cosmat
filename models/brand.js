const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Brand = new Schema({
    name: { type: String, require: true, unique: true },
    isActive: Boolean/* ,
    subBrand: {
        name: String,
        isActive: Boolean
    } */
});

Brand.plugin(passportLocalMongoose);

module.exports = mongoose.model('Brands', Brand, 'brands');
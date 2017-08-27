const Promise = require('bluebird');
const BrandModal = require('../../models/brand');



module.exports = class Brand {
    constructor() {}

    add(req, res, next) {

        BrandModal.find({"name":req.body.brand}, (err, isExist) => {
            if (err) {
                return next(err);
            }

            if(isExist.length > 0) {
                res.send("Already Exist")
                return res.end()
            }

            // create a new user
            var brand = BrandModal({
                name: req.body.brand,
                isActive: true,
                __v: 1
            });
            // save the user
            console.log("brand", brand)
            brand.save(function (err) {
                if (err) {
                    return next(err);
                }

                res.send("Save Success");
                res.end();
            });
            
        });
    }

    findOne(brand) {
        brand.find({}, (err, brand) => {
            if (err) throw err;

            //object of brand
            console.log(brand)
        });
    }
}
const express = require('express');
const router = express.Router();
const Brand = require('../controller/brand/index');
//import { Brand } from '../controller/brand/index'

const brand = new Brand();


router.post('/brand', brand.add);


module.exports = router;
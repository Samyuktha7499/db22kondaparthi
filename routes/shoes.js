var express = require('express');
const shoes_controlers= require('../controllers/shoes');
var router = express.Router();

/* GET home page. */
router.get('/', shoes_controlers.shoes_view_all_Page ); 
/* GET detail costume page */ 
router.get('/detail', shoes_controlers.shoes_view_one_Page);

/* GET create costume page */ 
router.get('/create', shoes_controlers.shoes_create_Page);

module.exports = router;
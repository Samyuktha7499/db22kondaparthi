var express = require('express');
const shoes_controlers= require('../controllers/shoes');
var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', shoes_controlers.shoes_view_all_Page ); 
/* GET detail shoes page */ 
router.get('/detail', shoes_controlers.shoes_view_one_Page);

/* GET create shoes page */ 
router.get('/create', secured,shoes_controlers.shoes_create_Page);

/* GET create update page */ 
router.get('/update', secured,shoes_controlers.shoes_update_Page); 
/* GET create shoes page */ 
router.get('/delete', secured,shoes_controlers.shoes_delete_Page); 

module.exports = router;
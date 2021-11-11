var Shoes = require('../models/shoes'); 
 
// List of all Shoes 
exports.shoes_list = async function(req, res) { 
    try{ 
        theShoes = await Shoes.find(); 
        res.send(theShoes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// for a specific Shoes. 
exports.shoes_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Shoes detail: ' + req.params.id); 
}; 
 
// Handle Shoes create on POST. 
exports.shoes_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Shoes create POST'); 
}; exports.shoes_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Shoes(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.type = req.body.type; 
    document.brand = req.body.brand; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// Handle Shoes delete form on DELETE. 
exports.shoes_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Shoes delete DELETE ' + req.params.id); 
}; 
 
// Handle Shoes update form on PUT. 
exports.shoes_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Shoes update PUT' + req.params.id); 
};
// VIEWS 
// Handle a show all view 
exports.shoes_view_all_Page = async function(req, res) { 
    try{ 
        theShoes = await Shoes.find(); 
        res.render('shoes', { title: 'Shoes Search Results', results: theShoes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
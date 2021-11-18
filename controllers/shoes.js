const shoes = require('../models/shoes');
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
 
 
//for a specific Costume. 
exports.shoes_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Shoes.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
 
// Handle Costume update form on PUT. 
exports.shoes_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await shoes.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.shoes_type)  
               toUpdate.type = req.body.type; 
        if(req.body.brand) toUpdate.brand = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
// Handle Costume delete on DELETE. 
exports.shoes_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Shoes.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
 // Handle a show one view with id specified by query 
 exports.shoes_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Shoes.findById( req.query.id) 
        res.render('shoesdetail',  
    { title: 'shoes Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.shoes_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('shoescreate', { title: 'Shoes Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
var explress  = require('express');
var jade  = require('jade');

var app  = explress();
app.set('view engine' , 'jade');

     
app.get('/' , function(req , res ){


 
    res.render('index', {title:'Guru99',message:'Welcome'});
    
    

});

var server = app.listen(3000 , function(){

});
 var express=require('express');
var path=require('path');

const TodoController = require('./Controllers/TodoController');

 var app=express();


 app.set('view engine','ejs');

 app.use('/assets',express.static('public/assets'))

 TodoController(app);

 app.listen(3000);
 
 console.log('open browser at 127.0.0.1:3000 to see the job');
 console.log(__dirname+'/public');




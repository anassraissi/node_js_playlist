 var express=require('express');
 
const TodoController = require('./Controllers/TodoController');

 var app=express();


 app.set('view engine','ejs');

 app.use(express.static('./public'));

 TodoController(app);

 app.listen(3000);
 
 console.log('open browser at 127.0.0.1:3000 to see the job');




module.exports=function(app){
    var bodyParser=require('body-parser');
    var UrlEncodeParser=bodyParser.urlencoded({extended:false});

    var data=[{item:'make breakfast'},{item:'make lunch'},{item :'take sleep'}];
    app.get('/todo',function(req,res){
    res.render('todo',{get_data:data});
    });

    app.post('/todo',UrlEncodeParser,function(req,res){
        data.push(req.body);
        res.json(data); 
    });
    app.delete('/todo/:item',function(req,res){
        data=data.filter(function(todo){
            return todo.item.replace(/ /g, "-") !== req.params.item; 

            // replace ghay3awad espaceb  b -
            // il kan true ghay returnih daba hna ghayretuerni ghir il makaychbahch dak li siftnah fparametre
        })
        res.json(data); 

    });

}
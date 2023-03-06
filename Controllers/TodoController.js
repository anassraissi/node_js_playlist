module.exports=function(app){
    var bodyParser=require('body-parser');
    var UrlEncodeParser=bodyParser.urlencoded({extended:false});
    var mongoose=require('mongoose');
    
    mongoose.set('strictQuery', true);

    mongoose.connect(
         'mongodb+srv://DbUser1:123@cluster0.29h1u6s.mongodb.net/?retryWrites=true&w=majority',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        },
        (err,client) => {
            if(err) console.log('err');
            else console.log("mongdb is connected");
        }
      );
      var TodoSchema = new mongoose.Schema({
        item: String
    });
    

    // var Todo=mongoose.model('Todo',TodoSchema);
    // var itemone=Todo({item:'pick a flower'}).save(function(err){    
    //     if(err) throw err;
    //     console.log('data saved');
    // })

    async function run() {
        var Todo=mongoose.model('Todo',TodoSchema);
      
    var result= await mongoose.model('Todo').findOne(); // Works!
    console.log(result);
      }
      run();

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
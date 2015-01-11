var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser());

var mongoose =  require("mongoose");
mongoose.connect('mongodb://localhost/testdb');

var Product = mongoose.model('Product',{name: String});

var product = new Product({name : 'Gubuntu'});
/*product.save(function(err) {
    if(err) {
        console.log('failed')
    } else {
        console.log('saved')
    }
});*/

app.get("/", function(req, res){
    Product.find(function(err, products){
        res.send(products);
    })
});

app.post("/add", function(req, res) {
    var name = req.body.name;
    var product = new Product({name: name});
    product.save(function (err) {
        res.send();
        if (err) {
            console.log('failed')
        } else {
            console.log('saved')
        }
    });
});

app.listen(3000);



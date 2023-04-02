const express = require('express');
const app = express();
const port = 3000;
const middlewareTime = require('./middlewareTime');

app.use(middlewareTime);

app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render("home", { name: "Home" });
});

app.get('/services', function(req, res){
    res.render("services", { name: "services" });
});

app.get('/contact', function(req, res){
    res.render("contact", { name: "contact" });
});



app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
    port);
});


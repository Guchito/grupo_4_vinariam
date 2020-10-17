var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"))


app.listen(3000);

app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/views/index.html');
});



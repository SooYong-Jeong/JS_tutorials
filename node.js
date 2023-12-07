const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/discord', function(req, res){
    res.send('discord death');
});

app.get('/kakao', function(req, res){
    res.send('kakao death');
});
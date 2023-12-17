const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});
 app.get('/sound/:name', function(req, res){
    const { name } = req.params
    console.log(name)
    if(name == "kakaotalk")
    res.json({'sound':'kakaotalk'})
    else if(name == "discord")
    res.json({'sound':'discord'})
    else
    res.json({'sound':'unknown'})
 });

// app.get('/discord', function(req, res){
//     res.send('discord death');
// });
// app.get('/kakao', function(req, res){
//     res.send('kakao death');
// });

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html');
});
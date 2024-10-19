const express = require('express');
const app = express();
const db = require('./db');
// get method: 
app.get('/', function(req, res){
    res.send('Hello Dear! How can I help you')
})

app.get('/chicken', (req,res)=>{
    res.send('Sure, I would love to serve chicken')
})

app.get('/idli', (req,res)=>{
    var customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambhar:true,
        is_chutney:false
    }
    res.send(customized_idli)
})
// post method in postman
app.post('/items',(req,res)=>{
    res.send('data is saved')
})
app.post('/person',(req,res)=>{
    res.send('data is also saved')
})

app.listen(3000, ()=>{
    console.log('listening to port 3000');
})
const express = require("express")
const Phones = require('./Phones.json');
const app = express()
const port = 5000

app.get('/',(req,res)=>{
    res.send('hello from my first server!')
})

app.get('/phones',(req,res)=>{
    res.send(Phones)
})

app.get('/phones/:id',(req,res)=>{
    const id = req.params.id 
    // console.log('hello',id);
    const phone = Phones.find(phone => phone.id === Number(id)) || {}
    res.send(phone)
})

app.listen(port,()=>{
    console.log(`this server running from this port: ${port}`);
})
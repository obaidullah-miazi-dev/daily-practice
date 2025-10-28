const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello from simple crud server')
})

app.listen(port,()=>{
    console.log(`server running port : ${port}`);
})
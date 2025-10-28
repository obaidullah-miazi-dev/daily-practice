const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('hello from user server')
})

app.use(cors())
const users = [
    { id: 1, name: 'ami', email: 'ami@gmail.com' },
    { id: 2, name: 'tumi', email: 'tumi@gmail.com' },
    { id: 3, name: 'se', email: 'se@gmail.com' },
]

app.use(express.json())

app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log('post method called',req.body);
    const newUser = req.body
    newUser.id= users.length + 1
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log('port :', port);
})
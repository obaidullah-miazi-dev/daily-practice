const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(express.json())
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


app.get('/', (req, res) => {
    res.send('hello from simple crud server')
})


//SimpleDBuser
//EUIxXlNaWpv1YsPY
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g0ilve4.mongodb.net/?appName=Cluster0`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const usersDB = client.db('usersDB')
        const usersCollections = usersDB.collection('users')

        app.get('/users', async (req, res) => {
            const cursor = usersCollections.find()
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/users/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await usersCollections.findOne(query)
            res.send(result)
            console.log('need user with id :', id);
        })





        app.post('/users', async (req, res) => {
            const newUser = req.body
            console.log('New user:', newUser)
            const result = await usersCollections.insertOne(newUser)
            res.send(result)
        })

        app.patch('/users/:id', async ( req,res) => {
            const id = req.params.id
            const updatedUser = req.body
            const query = { _id: new ObjectId(id) }
            const update = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                }
            }
            const options = {}
            const result = await usersCollections.updateOne(query, update, options)
            res.send(result)
        })

        app.delete('/users/:id', async (req, res) => {
            console.log(req.params.id)
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await usersCollections.deleteOne(query)
            res.send(result)
            console.log('delete user from database')
        })

        await client.db('admin').command({ ping: 1 })
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {
        // await client.close();
    }

}
run().catch(console.dir)



app.listen(port, () => {
    console.log(`server running port : ${port}`);
})
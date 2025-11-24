const express = require('express')
const { connectToDb } = require('./src/dbConnect/db')
require('dotenv').config()
const port = process.env.PORT || 9090
const db = process.env.MONGODB_URI


const app = express()

app.use(express.json());

app.get('/', (req, res)=>{
    
    res.send('welcome to uniConnect backend')
})

app.listen(port, async()=>{

    try{

         await connectToDb(db);
        console.log(`Connected to database successfully`)
        console.log(`server is running at port ${port}`)
    }
    catch(err){

        console.log(err);
    }

})

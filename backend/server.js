const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 9090
const app = express()

app.use(express.json());

app.get('/', (req, res)=>{
    
    res.send('welcome to uniConnect backend')
})

app.listen(port, ()=>{

    console.log(`server is running at port ${port}`)
})

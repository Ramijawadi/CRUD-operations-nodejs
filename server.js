
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const router = require('./router');
var bodyParser = require('body-parser');



/*ajoueter body-parser*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/*our routes*/

app.use('/api',router);   

/*connect database*/ 

mongoose.connect(process.env.MONGO_URI) 
.then(()=> console.log('db connected'))
.catch(error => console.log('error')) 


/*run server*/ 
const port = process.env.PORT
app.listen(port, (req,res) => { 

    console.log(`server running sur le port ${port}` )
}) 
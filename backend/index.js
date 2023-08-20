const express= require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()
const port=5000
const connectDB = require('./db/connect')
require('dotenv').config()
const Food = require('./model/food')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

// creating a data
const food = Food.create({"name": "spring roll", "test": "snack"})

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`server is listening on ${port}...`))
	} catch (error){
		console.error(error);
	}
}
start();
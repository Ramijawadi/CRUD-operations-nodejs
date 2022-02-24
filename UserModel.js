const mongoose = require('mongoose')
const Schema = mongoose.Schema ;

const UserSchema = new Schema({

nom : String ,
prenom : String ,
age: String, 
email: String

},{
timestamp:true 
}) 

module.exports = mongoose.model('users' , UserSchema)
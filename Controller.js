
const User = require('./UserModel')


const addUser = async (req, res) => {
  
    const user = new User(req.body)
   
    try {

   await user.save();
   res.status(201).json({message: 'success'}) 

} catch (error) {
    res.status(500).send(error)
}


}




const getUsers = async (req, res) =>{

try {
    
const users = await User.find({});
res.status(201).send(users)

} catch (error) {
    res.status(500).send(error)
}

}


const getUser = async (req, res) => {

try {
    const user = await User.find({_id: req.params.id})
     res.status(201).send(user)
} catch (error) {
    res.status(500).send(error)
} 


}

const updateUser = async (req, res) => {

    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
      
         res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error)
    } 
    
    
    }

const deleteUser = async (req , res) => {
try {
    await User.deleteOne({_id: req.params.id})
res.status(201).send('sussecceful delete')

} catch (error) {
    res.status(500).send(error)
}

}


module.exports = {

    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} 
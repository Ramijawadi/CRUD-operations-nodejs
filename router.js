const express= require('express');
const router = express.Router();
const controller = require('./Controller')


/*tous les routes*/
router.post('/users' ,controller.addUser );
router.get('/users' , controller.getUsers);
router.get('/users/:id' , controller.getUser);
router.patch('/users/:id' , controller.updateUser);
router.delete('/users/:id' , controller.deleteUser)

module.exports = router ;  
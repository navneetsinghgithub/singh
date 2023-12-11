var express = require('express');
var router = express.Router();

const userscontrolller = require('../controller/user_controller')


router.post('/adduser', userscontrolller.adduser)
router.get('/finduser', userscontrolller.finduser)
router.get('/singleUser/:id', userscontrolller.singleUser)
router.delete('/deleteuser/:id', userscontrolller.deleteuser)
router.put('/updateuser/:id', userscontrolller.updateUser)
module.exports = router;

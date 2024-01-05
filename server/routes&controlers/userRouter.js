const Router=require('express')
const router=new Router()
const userController=require('./userController')
const authMidlleware=require('../middleware/authMidlleware')

router.post('/registration',userController.registration)
router.post('/autorization',userController.autorization)
router.get('/auth',authMidlleware,userController.check)


module.exports=router
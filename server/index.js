require('dotenv').config()

const express=require('express')
const sequelize=require('./db')
const models=require('./models/models')
const cors=require('cors')
const router=require('./routes&controlers/index')
const errorHandler=require('./middleware/errorMidlleware')

const PORT=process.env.PORT ||5000

const app=express()
app.use(cors())
app.use(express.json())
app.use('/api',router)

// это midleware, обработка ошибок, должна быть в конце//
app.use(errorHandler)

const start=async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>console.log(`Server started on ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

start()


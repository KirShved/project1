const jwt=require('jsonwebtoken')


module.exports=function(req,res,next){
    if(req.method==='OPTIONS'){
        next()
    }
    try{
        const token=req.headers.authorization.split(' ')[1]
        if (!token){
            return res.status(401).jsom({massage:"Вы не авторизованы"})
        }
        const decoded=jwt.verify(token, process.env.SECRET_KEY)
        req.user=decoded
        next()
    }catch(e){
        console.log('ты не авторизирован')
    }
}
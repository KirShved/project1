const jwt=require('jsonwebtoken')


module.exports= function(role){
    return function(req,res,next){
        if(req.method==='OPTIONS'){
            next()
        }
        try{
            const token=req.headers.authorization.split(' ')[1]
            if (!token){
                return res.status(401).jsom({massage:"Вы не авторизованы"})
            }
            const decoded=jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role!==role){
                return res.status(403).jsom({massage:"У вас нет доступа"})
            }
            req.user=decoded
            next()
        }catch(e){
            res.status(401).json({massage:"Вы не авторизованы"})
        }
    }
}

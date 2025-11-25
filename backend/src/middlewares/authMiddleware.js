const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next)=>{

    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if(!token){

        return res.status(401).json({message: "No token Authorization denied"})
    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded;

        next();
    }
    catch(err){
        console.log(err);
    }
}

module.exports = authMiddleware;
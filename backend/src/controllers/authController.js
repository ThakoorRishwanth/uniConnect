const User = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const registerUser = async(req, res)=>{

    try{

        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){

            return res.status(400).json({message:"User already exists"})

        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name, email, password: hashedPassword
        })

        await newUser.save();

        res.status(201).json({message: "User registered successfully"})
    }
    catch(err){

        console.log(err)
    }
}

const loginUser = async(req, res)=>{

    try{

        const {email, password} = req.body;

        const user = await User.findOne({email})

        if(!user){

            return res.status(400).json({message: " Invalid email or password"})
        }

        const isPasswordValid =  await bcrypt.compare(password, user.password)

        if(!isPasswordValid){

            return res.status(400).json({message: "Invalid email or password"})
        }

        const token = await jwt.sign(
            {
                userId: user._id, 
                email: user.email
            }, 
            process.env.JWT_SECRET, 
            {
                expiresIn: '10min'
            })

            res.status(200).json({message: "login successfully", user:user, token: token})
    }
    catch(err){

        console.log(err);
    }
}

const protectRoute = (req, res)=>{

    res.json({message:"This is protected route!", user: req.user})
}

module.exports = {registerUser, loginUser, protectRoute}
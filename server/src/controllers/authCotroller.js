const bcrypt=require("bcrypt");
const User=require("../models/userModel");

exports.signup=async(req,res)=> {
    try {
        const {
            username, email, phone, password
        }=req.body;

        if(!password) {
            return res.status(400).json({
                message: "Password is required"
            });
        }

        const hashPassword=await bcrypt.hash(password, 10);

        const user=await User.createUser(username, email, phone, hashPassword);

        res.json({
            message: "Signup successful",
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                password: user.password
            }
        });
    }
    catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.login=async(req,res)=> {
    try {
        const {
            username, password
        }=req.body;
    
    
        const user=await User.findUser(username);

        if(!user) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        const passwordMatch=await bcrypt.compare(password, user.password);
        if(!passwordMatch) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        // // localStorage.setItem("token", data.token);
        // navigate("/dashboard");
        res.json({
            success: "true"

        });

    } catch(error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    } 
};
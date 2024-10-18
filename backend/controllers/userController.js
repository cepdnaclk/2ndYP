// import { request } from "express"
import userModel from "../models/userModel.js";
import validator from "validator";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";
import mongoose from "mongoose";


const createToken = (id) =>{           
    return jwt.sign({id},process.env.JWT_SECRET )
}


//Route for user login
const loginUser = async (req,res) => {
     try {
         const  {email,password} = req.body;

         const user = await userModel.findOne({email});

         if(!user){
             return res.json({success: false, message:"User doesn't exist"})

         }

         const isMatch = await bcrypt.compare(password,user.password);

         if(isMatch){
             const token = createToken(user._id)
             res.json({success:true,token})

         }

         else{
             res.json({success:false, message: 'Invalid credentials'})
         }
        
    } catch (error) {
         console.log(error);
         res.json({success: false,message: error.message})
        
    }

}


//Route for user Registration
const registerUser = async (req,res) => {
    
    try {
         const {name,email,password} =  req.body;

         //Checking user already exists or not
         const exists = await userModel.findOne({email});

         if(exists){
             return res.json({success: false, message:"User already exists"})
         }
        
         //Validating email format and strong password

         if(!validator.isEmail(email)){
             return res.json({success: false, message:"Please enter a valid email"})

         }

         if(password.length<8){
             return res.json({success: false, message:"Please enter a strong password"})

         }

         // Hashing user password
         const salt = await bcrypt.genSalt(10)
         const hashedPassword = await bcrypt.hash(password,salt)

         const newUser = new userModel({
             name,
             email,
             password: hashedPassword
         })

         const user = await newUser.save()

         const token = createToken(user._id)

         res.json({success:true,token})


        
    } catch (error) {
         console.log(error);
         res.json({success: false,message: error.message})
        
    }

}

//Route for admin login
const adminLogin = async (req,res) => {
    try {
        const  {email,password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})

        }
        else{
            res.json({success:false, message: 'Invalid credentials'})
        }
    } catch (error) {
        console.log(error);
        res.json({success: false,message: error.message})
        
    }


}

// Get all users
const getAllUsers = async (req, res) => {
    
    try {
        const users = await userModel.find({}, 'name email userRole');
        res.json({ success: true, users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get user by ID
const getUserById = async (req, res) => {
    
    try {
        const {userId} = req.body; 
        
        const user = await userModel.findById(new mongoose.Types.ObjectId(userId), 'name email userRole');
        
        if (!user) {
            console.log("User not found in the database.");
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({ success: true, user });

    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    res.send("api working delelte")
    // console.log("Delete request received for ID:", req.params.id);
    // const { id } = req.params;

    // try {
    //     const user = await userModel.findByIdAndDelete(id);
    //     if (!user) {
    //         return res.status(404).json({ success: false, message: 'User not found' });
    //     }
    //     res.json({ success: true, message: 'User deleted successfully' });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ success: false, message: 'Error deleting user' });
    // }
};

// Update user role
const changeUserRole = async (req, res) => {
    res.send("api working change role")
    // const { id } = req.params;
    // const { role } = req.body;

    // try {
    //     const user = await userModel.findById(id);
    //     if (!user) {
    //         return res.status(404).json({ success: false, message: 'User not found' });
    //     }

    //     user.role = role;
    //     await user.save();

    //     res.json({ success: true, message: 'User role updated', user });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ success: false, message: 'Error updating user role' });
    // }
};


export {loginUser,registerUser,adminLogin,getAllUsers, getUserById, deleteUser, changeUserRole}
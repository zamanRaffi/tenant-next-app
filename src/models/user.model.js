import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
      type: String,
      required: [true, 'User email is required'],
      unique: true,
      trim: true
  },
   password:{
    type: String,
    required: [true, 'User email is required'],
    trim: true
    },
  createdAt: {
      type: Date,
      default: Date.now
  },
  isVerfied:{
   type:Boolean,
   default:false
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

mongoose.models ={};

const User = mongoose.models.users || mongoose.model("User",userSchema);


export default User;
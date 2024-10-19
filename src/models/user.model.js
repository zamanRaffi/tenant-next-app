import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true
  },
  phoneNumber: {
    type: Number,
    required: [true, 'Phone Number is required'],
    unique: true,
    trim: true
  },
  state: {
    type: String,
    required: [true, 'State is required'],
    trim: true
  },
  zipCode: {
    type: String,
    required: [true, 'Zip Code is required'],
    trim: true
  },
  idCardNo: {
    type: String,
    required: [true, 'ID Card Number is required'],
    trim: true
  },
  drivingLicenseNo: {
    type: String,
    required: [true, 'Driving License Number is required'],
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

mongoose.models = {};

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

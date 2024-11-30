import { Request, Response, NextFunction } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { error } from 'console';

// Register user
const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username, password } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({ message: 'Username already exists' });
      return 
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
    return
  } catch (error) {
    res.status(500).json({ message: error.message });
    return 
    
  }
  
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({success:false, error: 'User not found' });
      return 
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(404).json({success:false, error: 'User not found' });
      return 
      
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    res.status(200).json({success:true, token, user: {_id: user._id, role: user.role}})
    return 
  } catch (error) {
    res.status(500).json({success:false, message: error.message });
    return 
  }
};

const verify = (req,res) => {
  res.status(200).json({success:true, user: req.user });
  return 
}

export {login, verify}

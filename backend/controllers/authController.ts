import { Request, Response, NextFunction } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Register user
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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
export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return 
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid credentials' });
      return 
      
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    res.json({ token });
    return 
  } catch (error) {
    res.status(500).json({ message: error.message });
    return 
  }
};

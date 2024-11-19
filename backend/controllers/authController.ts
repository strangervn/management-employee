import { Request, Response } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
         
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

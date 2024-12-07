import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(404).json({ message: 'No token, authorization denied' });
      return;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if(!decoded){
      res.status(404).json({ message: 'No token, authorization denied' });
      return;
    }
    const user = await User.findById({_id: decoded._id}).select('-password')
    if(!user){
      res.status(404).json({ message: 'Token is not valid' });

    }
    req.user = user()
    next()
  }
   catch (error) {
      res.status(500).json({ message: 'server error' });
  }

};
export default verifyUser

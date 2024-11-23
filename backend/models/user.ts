// backend/src/models/User.ts

import { Schema, model, Document } from 'mongoose';
import { IUser } from '../interfaces/user';

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'employee'], required: true }

  },
  { timestamps: true }
);

const User = model<IUser>('User', userSchema);
export default User;

import User from './models/User'
import bcrypt from 'bcrypt'
import connectDB from './config/db'
const userRegister = async () => {
    connectDB()
    try {
        const hashPassword = await bcrypt.hash('admin', 10)
        const newUser = new User ({
            name: 'Admin',
            email: 'admin@gmail.com',
            password: hashPassword,
            role: 'admin'
        })
        await newUser.save()
    } catch (error) {
        
    }
}

userRegister();
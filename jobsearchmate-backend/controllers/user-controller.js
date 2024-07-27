import { request, response } from "express";
import bcrypt from 'bcrypt';
import {User} from '../models/user-model.js';

// signup
export const signup = async (req = request, res = response) => {
    const { name, email, password } = req.body;

    try {
        // Hash the password
        const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user with hashed password
        const user = await User.create({ name, email, password: hashedPassword });

        // Don't send the password back in the response
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(201).json({ user: userResponse });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// login
export const login = async (req = request, res = response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the provided password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Don't send the password back in the response
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(200).json({ user: userResponse });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
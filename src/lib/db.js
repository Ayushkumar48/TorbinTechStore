import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let uri = process.env.MONGODB_URI;

export default async function connectDB() {
	if (mongoose.connection.readyState === 1) {
		return mongoose.connection;
	}
	try {
		const connection = await mongoose.connect(uri);
		console.log('MongoDB connected');
		return connection;
	} catch (err) {
		console.error('Error connecting to MongoDB:', err);
		throw err;
	}
}

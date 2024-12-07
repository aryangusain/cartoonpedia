import mongoose from "mongoose";

export default async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI, {dbName: 'cartoonpedia'})
    console.log('connected to database')
}
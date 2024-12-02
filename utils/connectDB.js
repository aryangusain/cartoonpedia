import mongoose from "mongoose";

export default async function connectDB() {
    mongoose.connect(process.env.MONGODB_URI, {dbName: 'cartoonpedia'})
    .then(() => console.log('connected to database'))
    .catch((err) => console.error( err))
}
import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    email: String,
    name: String,
    image: String
});

// const User = (mongoose.models?.User)? (mongoose.models?.User) : (mongoose.model('User', userSchema));

const characterSchema = mongoose.Schema({
    image: String,
    name: String,
    searchName: String,
    description: String,
    createdBy: userSchema 
});


const Character = (mongoose.models?.Character)? (mongoose.models?.Character) : (mongoose.model('Character', characterSchema));

export default Character;
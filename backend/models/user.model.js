const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minLength:[3,'First name must be at least 3 character long'],
        },
        lastname:{
            type: String,
            minLength:[3,'Last name must be at least 3 character long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minLength:[5,'Email must be at least 5 character long'],
    },
    password:{
        type: String,
        required: true,
    },
    socketId: {
        type: String
    },
})
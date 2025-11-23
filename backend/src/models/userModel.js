const {Schema, model} = require('mongoose')

const userSchema = new Schema({

    name:{
        type: String,
        required: true,
        trim: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    password:{
        type: String,
        required: true,
        minlength: 6
    },

    profilepic:{
        type: String,
        default: ""
    },

    bio:{
        type: String,
        default: "Hey i am using uniConnect"
    },

    isOnline:{
        type: Boolean,
        default: false
    },

    lastSeen:{
        type: Date,
        default: Date.now
    },

    followers:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    following:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    friends:[
        {
            type: Schema.Types.ObjectId,
            ref : 'User'
        }
    ],

    socketId:{
        type: String,
        default: null
    },

    statusMessage:{
        type: String,
        default: ""
    }
},
{
    timestamps: true
});

const User = model('User', userSchema);

module.exports = User;
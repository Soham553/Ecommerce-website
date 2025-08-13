import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        lowercase : true,
        trim : true,
        index : true,
        unique : true
    },
    fullname : {
        type : String,
        required : true,
        trim : true,
        lowercase : true
    },
    email : {
        type : String,
        unique : true,
        trim : true,
        required : true,
        lowercase : true
    },
    password : {
        type : String,
        required : [true, 'Password is required']
    },
    orderhistory : [
        {
            type : Schema.Types.ObjectId,
            ref : products
        }
    ]
},{ timestamps : true })


userSchema.pre("save", async function (next) {
    if(!this.isModified("password") ) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model('User', userSchema);



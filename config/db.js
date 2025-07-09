import mongoose from "mongoose";

let cached = global.mongoose

if (!cached){
    cached = global.mongoose = { conn: null,Promise:null}
}
u
async function connectDB() {
    if(cached.conn){
        return cached.conn
    }
    
    if(!cached.Promise){
        const opts ={
            bufferComands:false
        }
        cached.Promise = mongoose.connect('${process.env.MONGODB_URI}/quickcart',opts).then(mongoose =>{return mongoose})
    }

    cached.conn = await cached.Promise
    return cached.conn
}

export default connectDB
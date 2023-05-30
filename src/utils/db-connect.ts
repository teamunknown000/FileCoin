import mongoose, { Connection } from "mongoose";
import { DB_URL } from "~/config";

declare global {
    var mongoose: GlobalMongoose
}

interface GlobalMongoose {
    conn: (typeof mongoose)|null
    promise: Promise<typeof mongoose>|null
}

let cached = global.mongoose
if (!cached) {
    cached = global.mongoose = { 
        conn: null, 
        promise: null 
    }
}

export default async function connect() {
    if(cached.conn) {
        return cached.conn
    }
    if(!cached.promise) {
        cached.promise = mongoose.connect(DB_URL, { bufferCommands: false }).then(conn => conn)
    }
    try {
        cached.conn = await cached.promise
    }
    catch(err) {
        cached.promise = null
        throw err;
    }
    return cached.conn
}
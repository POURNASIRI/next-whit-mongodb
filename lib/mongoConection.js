import mongoose from "mongoose";


const connect = async()=>{

    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connect")
    } catch (error) {
        console.log(error)
    }
}

export default connect;
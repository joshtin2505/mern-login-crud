import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/firstCrud')
        console.log('MongoDB connected')
    }
    catch (err) {
        console.log(err)
    }
    // finally {
    //     console.log('Finall')
    // }
}
import mongoose from "mongoose";
import mongodb_name from "../constant.js";


const connectdb = async () => {
     try {

            const connet = await mongoose.connect(process.env.MONGODB_URL);
            console.log("connected : ", connet.connection.host);

        } catch (error) {

            console.log("Somethign went wrong while connecting to db");

        }


}

export default connectdb;
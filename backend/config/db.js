import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUser = process.env.MONGODB_USER;
const dbPass = process.env.MONGODB_PASS;

const dbConnectionUrl = `mongodb+srv://${dbUser}:${dbPass}@cluster0.5uztl07.mongodb.net/?retryWrites=true&w=majority`;

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(dbConnectionUrl);
    console.log(`MongoDb Connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

export default connectDb;

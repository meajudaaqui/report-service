import mongoose from "mongoose";
import dotenv from "dotenv";

export default new class mongo {
  async connect() {
    dotenv.config();
    mongoose.connect(process.env.MONGO_CONNECT, {});
  }
}
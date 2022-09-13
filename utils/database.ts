import mongoose from "mongoose";

import { DB_CONNECTED, DB_CONNECTING } from "../constants/apiMessages";

const connectDatabase = async () => {
  try {
    console.log(DB_CONNECTING);

    await mongoose.connect(process.env.MONGODB_URI!);

    console.log(DB_CONNECTED);
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;

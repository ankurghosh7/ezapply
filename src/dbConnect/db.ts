import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(String(process.env.DATABASE_URL));
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: Error | any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

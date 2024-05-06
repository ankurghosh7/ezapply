import mongoose from "mongoose";
import pg from "pg";
const dbConnection = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${process.env.MONGODB_DBNAME}`
        );
        console.log(
            `mongodb connected :: db host:${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log(`dbConnection function error: ${error}`);
    }
};

export { dbConnection };

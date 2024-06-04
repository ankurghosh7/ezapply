import { dbConnection } from "./db/connection.js";
import { app } from "./app.js";
// @ts-ignore
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});
dbConnection()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`app running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((error) => {
        console.log(`dbConnection error: ${error}`);
    });


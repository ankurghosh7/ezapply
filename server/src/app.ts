import express from "express";
import cookieParser from "cookie-parser";
const app = express();
// import bodyParser from "body-parser";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import { config } from "dotenv";
config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(
    cors({
        origin: [process.env.CORS_ORIGIN, "http://localhost:5173"],
        methods: ["GET", "POST", "PATCH", "DELETE"],
        credentials: true
    })
);
app.use("/api/v1/user", userRouter);

export { app };

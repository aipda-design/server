import express, { Request, Response } from 'express';
import * as dotenv from "dotenv";
import {AppDataSource} from "./src/config/data-source";
import userRoutes from "./src/routes/userRoutes";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config();
app.use(bodyParser.urlencoded())


app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}))

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Remplace bodyParser.urlencoded

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});



app.use("/api/users", userRoutes);

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected!");
        app.listen(8000, () => console.log("Server running on http://localhost:8000"));
    })
    .catch((err) => console.error("Error initializing database", err));
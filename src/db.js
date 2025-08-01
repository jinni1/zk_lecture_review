import Lecture from "./models/Lecture.js";
import { DataSource } from "typeorm";
import dotenv from "dotenv"
import StudentCommitment from "./models/StudentCommitment.js";
import Evaluation from "./models/Evaluation.js";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Lecture, StudentCommitment, Evaluation],
    synchronize: true, 
    logging: true,
});
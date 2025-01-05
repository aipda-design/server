import {DataSource} from "typeorm";
import * as dotenv from "dotenv";

// Charger les variables d'environnement depuis un fichier .env
dotenv.config();

// Vérifier que toutes les variables nécessaires sont définies
const requiredEnvVariables = [
    "TYPE",
    "DB_HOST",
    "DB_PORT",
    "DB_USER",
    "DB_PASSWORD",
    "DB_NAME"
];

requiredEnvVariables.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
});


export const AppDataSource = new DataSource({
    type: process.env.TYPE as "mysql" | "mariadb", // Cast pour satisfaire TypeScript
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306", 10), // Convertir en nombre
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.TYPEORM_SYNC === "true", // Synchroniser ou non selon l'environnement
    logging: process.env.TYPEORM_LOGGING === "true", //
    entities: ["src/models/*.ts"]
})
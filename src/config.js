import { config } from "dotenv";
config({ path: "../config.env" });

export const DB_URL = process.env.DB_URL || "";

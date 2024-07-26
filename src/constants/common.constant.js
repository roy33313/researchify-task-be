import dotenv from "dotenv";

dotenv.config();

export const EXPRESS_PORT_NO = process.env.EXPRESS_PORT_NO || 8080;
export const JWT_SECRET = process.env.JWT_SECRET;
export const MONGO_DB_URI = process.env.MONGO_DB_URI;

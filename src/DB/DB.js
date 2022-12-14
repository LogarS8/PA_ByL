import { createPool } from "mysql2/promise";

import {
  DB_HOST,
  DB_USER,
  DB_PORT,
  DB_PASSWORD,
  DB_NAME,
} from "../config.js";


export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  // port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_NAME,
  ssl:{
    rejectUnauthorized: false
  },
  // host: "localhost",
  // user: "root",
  // port: 3306,
  // password: "n0m3l0",
  // database: "parodri",
});

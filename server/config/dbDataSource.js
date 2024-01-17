import { DataSource } from "typeorm";
import Order from "../app/models/order.model.js";

const dbEntities = { Order };
const dbDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: Object.values(dbEntities),
  migrations: ["server/migrations/*.ts"],
  synchronize: false,

  logging: process.env.STAGE !== "prod",
});

export default dbDataSource;

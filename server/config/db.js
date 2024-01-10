import { DataSource } from "typeorm";
import Order from "../app/models/order.model.js";

const dbEntities = { Order };

const getDbDataSource = async () => {
  const dataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,

    entities: Object.values(dbEntities),
    synchronize: false,

    logging: process.env.STAGE !== "prod",
  });
  await dataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
  return dataSource;
};

export default {
  getDbDataSource,
  ...dbEntities,
};

import { Sequelize } from "sequelize";
import { rdbConfig } from "../config/rdb";

export const rdb = new Sequelize(
  rdbConfig.DB_NAME,
  rdbConfig.DB_USER,
  rdbConfig.DB_PASSWORD,
  {
    ...rdbConfig.OPTIONS,
  }
);

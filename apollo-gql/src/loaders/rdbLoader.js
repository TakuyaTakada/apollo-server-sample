import { Sequelize } from "sequelize";
import rdbConfig from "../config/rdbConfig";

export const rdbLoader = new Sequelize(
  rdbConfig.DB_NAME,
  rdbConfig.USERNAME,
  rdbConfig.PASSWORD,
  {
    ...rdbConfig.params,
  }
);

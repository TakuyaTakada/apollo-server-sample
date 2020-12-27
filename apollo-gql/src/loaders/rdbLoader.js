import { Sequelize } from "sequelize";
import rdbConfig from "../config/rdbConfig";

export const sequelize = new Sequelize(
  rdbConfig.dbName,
  rdbConfig.username,
  rdbConfig.password,
  {
    ...rdbConfig.params,
  }
);

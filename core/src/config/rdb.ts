import { Options } from "sequelize";

interface rdbConfigInterface {
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  OPTIONS: Options;
}

export const rdbConfig: rdbConfigInterface = {
  DB_NAME: process.env.RDB_NAME || "development",
  DB_USER: process.env.RDB_USER || "developer",
  DB_PASSWORD: process.env.RDB_PASSWORD || "dev1234",
  OPTIONS: {
    host: process.env.RDB_HOST || "mysql",
    port: parseInt(process.env.RDB_PORT || "3306"),
    dialect: "mysql",
    define: {
      freezeTableName: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};

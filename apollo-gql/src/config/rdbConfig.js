const rdbConfig = {
  DB_NAME: process.env.RDB_NAME || "dev",
  USERNAME: process.env.RDB_USERNAME || "dev",
  PASSWORD: process.env.RDB_PASSWORD || "dev1234",
  params: {
    host: process.env.RDB_HOSTNAME || "mysql",
    port: process.env.RDB_PORT || "3306",
    dialect: "mysql",
  },
};

export default rdbConfig;

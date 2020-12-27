export const mongoConfig = {
  HOSTNAME: process.env.MONGO_HOSTNAME || "mongo",
  DATABASE: process.env.MONGO_DB_NAME || "dev",
  PORT: process.env.MONGO_PORT || "27017",
};

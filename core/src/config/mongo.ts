interface mongoConfigInterface {
  HOSTNAME: string;
  DATABASE: string;
  PORT: string;
}

export const mongoConfig: mongoConfigInterface = {
  HOSTNAME: process.env.MONGO_HOST || "mongo",
  DATABASE: process.env.MONGO_DB_NAME || "dev",
  PORT: process.env.MONGO_PORT || "27017",
};

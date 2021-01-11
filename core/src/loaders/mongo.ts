import mongoose from "mongoose";
import { mongoConfig } from "../config/mongo";

const uri = `mongodb://${mongoConfig.HOSTNAME}:${mongoConfig.PORT}/${mongoConfig.DATABASE}`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(console.error);

export const mongo = mongoose;

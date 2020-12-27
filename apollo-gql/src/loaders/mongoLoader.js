import mongoose from "mongoose";
import { mongoConfig as config } from "../config/mongoConfig";

const uri = `mongodb://${config.HOSTNAME}:${config.PORT}/${config.DATABASE}`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const mongoLoader = mongoose;

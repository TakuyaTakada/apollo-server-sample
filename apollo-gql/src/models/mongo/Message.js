import { Schema, model } from "mongoose";

const schema = new Schema({
  content: {
    type: Schema.Types.String,
  },
  userId: {
    type: Schema.Types.String,
  },
  roomId: {
    type: Schema.Types.String,
  },
});

const Message = model("Message", schema);

export default Message;

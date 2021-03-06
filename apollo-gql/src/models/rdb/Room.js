import { Model, DataTypes } from "sequelize";
import { rdbLoader } from "../../loaders/rdbLoader";

export default class Room extends Model {}

Room.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: rdbLoader, modelName: "room" }
);

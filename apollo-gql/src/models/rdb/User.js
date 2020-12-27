import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../loaders/rdbLoader";
import Room from "./Room";

export default class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "user" }
);

User.Rooms = User.hasMany(Room);
Room.belongsTo(User);

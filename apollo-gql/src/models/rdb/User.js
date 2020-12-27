import { Model, DataTypes } from "sequelize";
import { rdbLoader } from "../../loaders/rdbLoader";
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
  { sequelize: rdbLoader, modelName: "user" }
);

User.Rooms = User.hasMany(Room);
Room.belongsTo(User);

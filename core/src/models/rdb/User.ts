import { Model, DataTypes } from "sequelize";
import { rdb } from "../../loaders/rdb";

export default class User extends Model {
  public id!: number;
  public sub!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    sub: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { sequelize: rdb, modelName: "user" }
);

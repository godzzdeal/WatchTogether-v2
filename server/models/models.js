
import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

export const User = db.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true },
  pass: { type: DataTypes.STRING },
});

export const DataUser = db.define("data_user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: {type: DataTypes.INTEGER},
  email: { type: DataTypes.STRING },
});

User.hasOne(DataUser);
DataUser.belongsTo(User);

export default { User, DataUser };

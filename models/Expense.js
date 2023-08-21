const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Expense extends Model {}

Expense.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "budget",
        key: "id",
      },
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    modelName: "expense",
  }
);

module.exports = Expense;
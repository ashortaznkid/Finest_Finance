const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Budget extends Model {}

Budget.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
      
          income: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          
          userId: {
            type: DataTypes.INTEGER,
            references: {
              model: "user",
              key: "id",
                     },
          },
    },
     {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: "budget",
     }
);

module.exports = Budget;
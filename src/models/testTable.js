const moment = require("moment");
const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const urls = sequelize.define(
    "testTable",
    {
      cm_key: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "testTable",
      timestamps: false,
    }
  );

  return urls;
};


const { Sequelize } = require("sequelize");

const connection = require("../config/db/connectionPool");

const User = connection.define("users", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: true,
    type: Sequelize.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: true,
    type: Sequelize.DATE,
    field: "updated_at",
    defaultValue: null
  }
});

module.exports = User;
import {
  Sequelize,
  DataTypes,
} from "sequelize";
require('dotenv').config();

const {
  DEV_DB_USERNAME,
  DEV_DB_PASSWORD,
  DEV_DB_NAME,
  DEV_DB_HOSTNAME,
  DEV_DB_DIALECT,
  DEV_DB_PORT,
} = process.env;


const sequelize = new Sequelize(`
${DEV_DB_DIALECT}://${DEV_DB_USERNAME}:${DEV_DB_PASSWORD}@${DEV_DB_HOSTNAME}:${DEV_DB_PORT}/${DEV_DB_NAME}
`);

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: new DataTypes.STRING(64),
      defaultValue: 'Unnamed Note',
    },
    password: {
      type: new DataTypes.STRING(4096),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
  }
);

import 'dotenv/config';
import { Sequelize, Options } from 'sequelize';
import DBConfig from '../config/config';

const env = process.env.NODE_ENV || 'development';

const config = DBConfig[env];

interface Database {
  sequelize: Sequelize;
}
// const {use_env_variable, ...restConfig} = config;
export const sequelize = new Sequelize(
  process.env[config.use_env_variable] as string,
  config as Options,
)

const db: Database = {
  sequelize,
};

export default db;

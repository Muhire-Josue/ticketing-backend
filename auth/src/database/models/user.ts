import {
  DataTypes,
  Model,
} from "sequelize";
import { sequelize } from './index';


class User extends Model {
  public id!: number;
  public name!: string;
  public description!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public readonly user?: User;

}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    tableName: 'Users',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
)

 export default User;

import { DataTypes, Model } from 'sequelize';
import db from '.';

class User extends Model {
  name: string;

  email: string;

  password: string;
}

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  timestamps: true,
});

export default User;

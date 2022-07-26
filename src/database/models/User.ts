import { DataTypes, Model } from 'sequelize';
import db from '.';

class User extends Model {
  id: number;

  username: string;

  email: string;

  password: string;
}

User.init({
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize: db,
  tableName: 'users',
  underscored: true,
  timestamps: true,
});

export default User;

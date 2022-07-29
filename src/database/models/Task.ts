import { DataTypes, Model } from 'sequelize';
import db from '.';
import User from './User';

class Task extends Model {
  userId: number;

  description: string;

  status: string;
}

Task.init({
  userId: DataTypes.INTEGER,
  description: DataTypes.STRING,
  status: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'tasks',
  underscored: true,
  timestamps: true,
});

Task.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(Task, { foreignKey: 'userId', as: 'user' });

export default Task;

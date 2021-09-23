'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.history)
    }
  };
  user.init({
    name: DataTypes.STRING,
    is_registered: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    underscored:true
  });
  return user;
};
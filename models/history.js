'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      history.belongsTo(models.user,{
        foreignKey:'user_id'
      })
    }
  };
  history.init({
    user_id: DataTypes.INTEGER,
    text: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'history',
    freezeTableName: true,
    underscored:true
  });
  return history;
};
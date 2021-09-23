'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  question.init({
    question: DataTypes.STRING,
    a: DataTypes.STRING,
    b: DataTypes.STRING,
    c: DataTypes.STRING,
    d: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'question',
    freezeTableName: true,
    underscored:true
  });
  return question;
};
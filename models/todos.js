'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todos.init({
    title: DataTypes.STRING,
    memo: DataTypes.STRING,
    limit: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Todos',
  });
  return Todos;
};
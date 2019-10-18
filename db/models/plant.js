'use strict';
module.exports = (sequelize, DataTypes) => {
  const plant = sequelize.define('plant', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING
  }, {});
  plant.associate = function(models) {
    // associations can be defined here
  };
  return plant;
};
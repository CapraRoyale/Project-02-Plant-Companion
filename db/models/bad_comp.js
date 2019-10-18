'use strict';
module.exports = (sequelize, DataTypes) => {
  const bad_comp = sequelize.define('bad_comp', {
    hinderer: DataTypes.INTEGER,
    hinderee: DataTypes.INTEGER,
    desc: DataTypes.STRING
  }, {});
  bad_comp.associate = function(models) {
    // associations can be defined here
  };
  return bad_comp;
};
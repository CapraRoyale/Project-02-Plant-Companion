'use strict';
module.exports = (sequelize, DataTypes) => {
  const good_comp = sequelize.define('good_comp', {
    helper: DataTypes.INTEGER,
    helpee: DataTypes.INTEGER,
    desc: DataTypes.STRING
  }, {});
  good_comp.associate = function(models) {
    // associations can be defined here
  };
  return good_comp;
};
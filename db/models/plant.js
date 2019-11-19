'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const plant = sequelize.define('plant', {
        name: DataTypes.STRING,
        desc: DataTypes.STRING,
        misc: DataTypes.STRING
    }, {});
    plant.associate = function(models) {
        // associations can be defined here
        plant.hasMany(models.good_comp);
        plant.hasMany(models.bad_comp);
    };
    return plant;
};
module.exports = function(sequelize, DataTypes) {
    const plant = sequelize.define('plant', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        plantName: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        details: DataTypes.STRING,
    }, {
        freezeTableName: true
    });
    const good_companion = sequelize.define('good_companion', {
        helpeeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        helperId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        details: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        freezeTableName: true
    });
    const bad_companion = sequelize.define('bad_companion', {
        hindereeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hindererId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });
    plant.belongsToMany(plant, {
        as: helpee_id,
        through: good_companion,
        foreignKey: id,
        otherKey: helper_id
    });
    plant.belongsToMany(plant, {
        as: hinderee_id,
        through: bad_companion,
        foreignKey: id,
        otherKey: hinderee_id
    })

    sequelize.sync({
            force: true
        })
        .then(() => {
            console.log("Database and tables created!")
        })

    return plant;
    return good_companion;
    return bad_companion;
};
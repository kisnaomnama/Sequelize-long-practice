'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
/**
 * Band.hasMany(models.Musician, {
        foreignKey: "bandId",
        onDelete: "CASCADE",
        hooks: true,
      });
 */
    static associate(models) {
      // Team.belongsTo(models.Sport,{
      //   foreignKey: "sportsId"
      // })

      // Team.hasMany(models.Player,{
      //   foreignKey: "currentTeamId",
      //   onDelete: "CASCADE",
      //   hooks: true,
      // })

    }
  }
  Team.init({
    name: {
      type: DataTypes.STRING,
    },
    homeCity: {
      type: DataTypes.STRING,
    },
    sportId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};

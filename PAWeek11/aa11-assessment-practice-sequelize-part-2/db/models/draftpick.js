'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DraftPick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    /**
     *Musician.belongsToMany(models.Instrument, {
        through: models.MusicianInstrument,
        foreignKey: "musicianId",
        otherKey: "instrumentId",
      });
     */
    static associate(models) {
      // define association here
      
    }
  }
  DraftPick.init({
    fanId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE'
    },
    playerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DraftPick',
  });
  return DraftPick;
};

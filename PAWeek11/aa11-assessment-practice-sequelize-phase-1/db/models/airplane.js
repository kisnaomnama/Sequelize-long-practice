'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    airlineCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,2],
        isUppercase: true,
        // isEqual(value){
        //   if(value === this.flightNumber){
        //     throw new Error()
        //   }
        // }
      }
    },

    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique:true,
      validate: {
        len: [1,4],
        isNumeric: true
      }
    },

    inService: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },

    maxNumPassengers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min:2,
        max:853
      }
    },
    
    currentNumPassengers: {
      type: DataTypes.INTEGER,
    //  allowNull: true,
      validate: {
        min:0,
        max:853,
        isGreaterThanMaxnumber(value){
          if(value > this.maxNumPassengers){
            throw new Error("this is too much")
          }
        },

        // isInService(value){
        //   this.inService = true;
        // }
      }
    },
    
    firstFlightDate:{
      type: DataTypes.DATE,
      validate: {
        isAfter: '2019-12-31',    // only allow date strings after a specific date
        isBefore: '2022-01-01',   // only allow date strings before a specific date
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};

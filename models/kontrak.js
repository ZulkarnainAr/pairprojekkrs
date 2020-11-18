'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kontrak extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kontrak.belongsTo(models.Mahasiswa,{
        sourceKey:'id',
        foreignKey:'mahasiswaId'
      })
      Kontrak.belongsTo(models.Matakuliah,{
        sourceKey:'id',
        foreignKey:'matkulId'
      })
    }
  };
  Kontrak.init({
    mahasiswaId: DataTypes.INTEGER,
    matkulId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kontrak',
  });
  return Kontrak;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    //untuk helper rumah alamat jadi huruf kecil
    get alamatLower() {
      return this.alamat.toLowerCase()
    }

    hitungTotalSKS() {
      // harusnya get data kontrak, total semua sks nya
      return 20
    }

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mahasiswa.belongsToMany(models.Matakuliah,{
        through:models.Kontrak,
        foreignKey:'mahasiswaId'
      })
      Mahasiswa.hasMany(models.Kontrak,{
        sourceKey:'id',
        foreignKey:'mahasiswaId'
      })
    }
  };
  Mahasiswa.init({
    nama: DataTypes.STRING,
    nim: DataTypes.STRING,
    alamat: DataTypes.STRING,
    jurusan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mahasiswa',
    hooks: {
      //nanti pake hooks untuk enkripsi password sebelum diimpan ke database
    }
  });
  return Mahasiswa;
};
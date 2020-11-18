
const { Mahasiswa, Matakuliah } = require("../models/index")

class MahasiswaController {
    //menampilkan list mahasiswa
    static listMhs(req, res) {
        Mahasiswa.findAll({
            order: [['nama', 'ASC']]
        })
            .then(function (result) {
                res.render("mahasiswa-list",{mahasiswa: result})
            })
            .catch(function (error) {
                res.send(error)
            })

    }



    static findOne(req, res) {
        let id = req.params.id
        Mahasiswa.findByPk(id, {
            include: [Matakuliah]
        })
            .then(function (result) {
                res.send(result)
            })
            .catch(function (error) {
                res.send(error)
            })
     }

}
module.exports = MahasiswaController
'use strict';

const response = require('./res');
const conn = require('./connect');

// Menampilkan pesan bahwa aplikasi REST API berjalan
exports.index = (req, res) => {
    response.ok("Aplikasi REST API ku berjalan", res);
};

// Menampilkan semua data mahasiswa
exports.tampilSemuaMahasiswa = (req, res) => {
    const query = 'SELECT * FROM mahasiswa';
    conn.query(query,
        (error, rows, fields) => {
            if (error) {
                console.error(error);
                response.ok("Terjadi kesalahan pada server", res);
            } else {
                response.ok(rows, res);
            }
        });
};


// menampikan semua data mahasiswa berdasarkan id
exports.tampilsesuaiid = function (req, res) {
    let id = req.params.id;

    conn.query(`SELECT * FROM mahasiswa WHERE id_mahasiswa = ${id}`,
        (error, rows, fields) => {
            if (error) {
                console.error(error);
            } else {
                response.ok(rows, res)
            }
        })
}

// menambahkan data mahasiswa
exports.tambahmahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    conn.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES (?,?,?)',
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil menambahkan data!", res)
            }
        })
}

// mengubah data mahasiswa berdasarkan id
exports.ubahMahasiswa = function (req, res) {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    conn.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil mengubah data!", res)
            }
        })
}

// menghapus mahasiswa berdasarkan id
exports.hapusMahasiswa = function (req, res) {
    var id = req.body.id_mahasiswa;

    conn.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus data!", res)
            }
        })
}

// menampilkan matakuliah group
exports.tampilGroupMatakuliah = function (req, res) {
    conn.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_mahasiswa = mahasiswa.id_mahasiswa AND krs.id_matakuliah = matakuliah.id_matakuliah ORDER BY mahasiswa.id_mahasiswa',
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.okNested(rows, res)
            }
        })

}
'use strict';

module.exports = app => {
    const jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilSemuaMahasiswa);

    app.route('/tampil/:id')
        .get(jsonku.tampilsesuaiid);

    app.route('/tambah')
        .post(jsonku.tambahmahasiswa);

    app.route('/ubah')
        .put(jsonku.ubahMahasiswa);

    app.route('/hapus')
        .delete(jsonku.hapusMahasiswa);

    app.route('/tampilmatakuliah')
        .get(jsonku.tampilGroupMatakuliah);
}
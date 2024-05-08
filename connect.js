var mysql = require('mysql');

//untuk koneksi ke database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbmahasiswa'
});

conn.connect(err => {
    if(err){
        throw err;
    } else {
        console.log('MySQL terkoneksi');
    }
});

module.exports = conn;
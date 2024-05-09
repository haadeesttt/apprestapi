const mysql = require('mysql');

// Membuat koneksi MySQL
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbmahasiswa'
});

// Fungsi untuk menghubungkan ke database
const connectToDatabase = async () => {
    try {
        await new Promise((resolve, reject) => {
            conn.connect((error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
        console.log('MySQL terkoneksi');
    } catch (error) {
        console.error('Koneksi ke database gagal:', error);
    }
};

// Memanggil fungsi untuk menghubungkan ke database
connectToDatabase();

// Export koneksi
module.exports = conn;

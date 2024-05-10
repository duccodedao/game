const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'do_not_touch',
    password: 'do_not_touch',
    database: 'do_not_touch'
});


export default connection;
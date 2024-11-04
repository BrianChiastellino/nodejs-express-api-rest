import mysql2  from 'mysql2';

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'nodejs_express_freeCodeCamp',
    port: 3306,
});

db.connect( (err ) => {
    if ( err ) {
        throw err;
    };

    console.log('Base de datos conectada');
});

export default db;
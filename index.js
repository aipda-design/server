import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'aipdia', // Correspondance EXACTE
    password: 'root', // Correspondance EXACTE
    database: 'aipdia_db'
});

connection.connect(err => {
    if (err) {
        console.error('Erreur de connexion :', err);
        return;
    }
    console.log('Connexion réussie !');
    connection.end();
});
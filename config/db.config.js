import mysql from 'mysql';

export const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs_mysql',
});

dbConn.connect(err => err ? console.log(err) : console.log('Database Connected!'));
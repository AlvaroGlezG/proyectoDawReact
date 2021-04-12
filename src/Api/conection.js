const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'proyecto-daw-react',
    password: 'root',
    port: 5432
});

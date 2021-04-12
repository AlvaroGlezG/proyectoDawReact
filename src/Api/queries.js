const pool = require('./conection');

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            console.error(error);
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers
}
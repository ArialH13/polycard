const Pool = require('pg').Pool
const pool = new Pool({
  user: 'ar',
  host: 'localhost',
  database: 'test',
  password: 'password',
  port: '5432'
})


const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC',
                    (error, results) => { if(error) {throw error} response.status(200).json(results.rows)})
                    console.log(response.data)
}

const getUserByID = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM users WHERE id=$1', [id], (error, results) => {if(error) {throw error} response.status(200).json(results.rows)})
}

module.exports = {
  getUsers,
  getUserByID
}

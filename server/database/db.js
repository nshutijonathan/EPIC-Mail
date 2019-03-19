const Pool = require('pg').Pool
const pool = new Pool({
  user: 'epic',
  host: 'localhost',
  database: 'EPIC_MAIL10',
  password: 'password',
  port: 5432,
})
export default pool ;
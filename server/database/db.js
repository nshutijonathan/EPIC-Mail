const Pool = require('pg').Pool
const pool = new Pool({
  user: 'epic',
  host: 'localhost',
  database: 'EPIC_MAIL10',
  password: 'password',
  port: 5432,
})
pool.on('connect',()=>{
console.log('connected to the database');
});
//create tables
export const createTables=()=>{
	//users table
	const usersTable= `CREATE TABLE IF NOT EXIST
	users(
	userID SERIAL PRIMARY KEY NOT NULL,
	email VARCHAR(20) NOT NULL,
	firstName VARCHAR(20) NOT NULL,
	lastName VARCHAR(20) NOT NULL,
	password VARCHAR(50) NOT NULL
	)`;
	pool.query(usersTable)
	.then((res)=>{
		console.log(res);
		pool.end();

	})
	.catch((err)=>{
		console.log(err);
		pool.end();

	})
	pool.on('remove',()=>{
		console.log('client removed');

	});


}
export default pool ;
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
	const usersTable= `CREATE TABLE IF NOT EXISTS
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
		process.exit(0);

	});
	const messages=`CREATE TABLE IF NOT EXISTS
	messages(
	messageID SERIAL PRIMARY KEY NOT NULL,
	createdon VARCHAR(20) NOT NULL,
	subject VARCHAR(20) NOT NULL,
	message VARCHAR(20) NOT NULL,
	parentmessageid VARCHAR(50) NOT NULL,
	status VARCHAR(20) NOT NULL
	)
	`;
	pool.query(messages)
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
		process.exit(0);

	});



}
export default pool ;
////This exposes the exports to the running CLI
require('make-runnable');
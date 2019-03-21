import pool from '../database/db';    
class UsersController{
	static getALLusers(req,res){
		pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
   
	}
	
	static getUser(req,res){
		const id=parseInt(req.params.id)
		pool.query('SELECT * FROM users where id=$1',[id],(error,results)=>{
			if (error) {
				throw error
			}
			res.status(200).json(results.rows)
		})
   
	}
	static createUser(req,res){
		const {id,email,firstname,lastname,password}=req.body;
		pool.query('INSERT INTO users (id,email,firstname,lastname,password) VALUES ($1,$2,$3,$4,$5)',[id,email,firstname,lastname,password],
			(error,results)=>{
				if(error){
					throw error
				}
				res.status(201).send(`User added with ID: ${results.insertId}`);
			})
	}
	static deleteUser(req,res){
		const id = parseInt(req.params.id)

       pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
			}
			res.status(200).send(`User deleted with ID: ${id}`)
		})
	}
 }
 export default UsersController;

import pool from '../database/db';
class User{
	static sign_up(req,res){
		const data = {
	  email:req.body.email,		
      firstname : req.body.firstname,
      lastname : req.body.lastname,
      password : req.body.password,
    }
	pool.connect((err, client, done) => {
      const query = 'INSERT INTO users(email,firstName,lastName, password) VALUES($1,$2,$3,$4) RETURNING *';
      const values = [data.email,data.firstname, data.lastname, data.password];

      client.query(query,values,(error,result)=>{
      	console.log(result);
      	done();
      	if (error){
      		res.status(400).json({error});
      	}
      	res.status(201).send({
      		status:'201',
      		message:"successfully",
      		result:result.rows[0]
      	});
      })


  

})
}
}
export default User;
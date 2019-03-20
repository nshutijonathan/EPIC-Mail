class User{
	static sign_up(req,res){
		const data = {
	  email:req.body.email,		
      firstname : req.body.firstName,
      lastname : req.body.lastName,
      password : req.body.password
    }
	pool.connect((err, client, done) => {
      const query = 'INSERT INTO users(,email,firstName,lastName, password) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *';
      const values = [data.email,data.firstname, data.lastname, data.password];

      client.query(query,values,(error,result)=>{
      	done();
      	if (error){
      		res.status(400).json({error});
      	}
      	res.status(202).send({
      		status:'202',
      		result:result.rows[0],
      	})
      })

  

})
}
}
export default User;
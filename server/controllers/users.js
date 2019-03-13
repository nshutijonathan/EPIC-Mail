import user from '../modals/user';

class UsersController{
	static getALLusers(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			users:user
		});
	}
	static getUser(req,res){
		const get_id=user.find(check_id => check_id.id === parseInt(req.params.id));//c should be something
       if(!get_id) return res.status(402).send({
       	status:402,//status codes
     	success:"false",
     	message:"id not found"
     });
       	 return res.status(200).send({
       		status:200,
       		success:'true',
       		message:'id retrieved successfully',
       		get_id,
       	});
	}
	static createUser(req,res){
		const add={
		id:user.length+1,
		email:req.body.email,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		password:req.body.password
	}
	if(!add.email) return res.status(402).send({
		status:402,
		success:"false",
		message:"email is required"
	});
	user.push(add);
	 return res.status(200).send({
		status:200,
		success:"true",
		message:"successfully added",
		add
	});
	}
	static updateUser(req,user){
		const get_id=user.find(check_id => check_id.id === parseInt(req.params.id));
     if(!get_id) return res.status(402).send({
     	status:402,
     	success:"false",
     	message:"id not found"
     });
     if(!req.body.email) {
    return res.send({
      status:402,
      success: 'false',
      message: 'email is required'
    });
     }
     else if(!req.body.firstname){
     	return res.status(402).send({
     		status:402,
     		success:"false",
     		message:"firstname required"
     	});
     }
     get_id.email=req.body.email;
     get_id.firstname=req.body.firstname
     return res.status(200).send({
     	status:200,
     	success:"true",
     	message:"successfully updated",
     	get_id
     });
	}
	static deleteUser(req,res){
		const get_id=user.find(check_id => check_id.id === parseInt(req.params.id));
	if(!get_id) return res.status(402).send({
		status:402,
		success:"false",
		message:"id not found"
	});

	const index=user.indexOf(get_id);
	user.splice(index,1);
	return res.status(200).send({
		status:200,
		success:"true",
		message:"successfully deleted",
		get_id
	});
	}
}

export default UsersController;

 
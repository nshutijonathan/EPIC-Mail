import user from '../modals/user';

class UsersController{
	getALLusers(req,res){
		return res.send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			users:user
		});
	}
	getUser(req,res){
		const get_id=user.find(c => c.id === parseInt(req.params.id));
       if(!get_id) res.status(402).send({
     	success:"false",
     	message:"id not found"
     });
       	res.send({
       		status:200,
       		success:'true',
       		message:'id retrieved successfully',
       		get_id
       	});
	}
	createUser(req,res){
		const add={
		id:user.length+1,
		email:req.body.email,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		password:req.body.password
	}
	user.push(add);
	res.status(200).send({
		success:"true",
		message:"successfully added",
		add
	});
	}
	updateUser(req,user){
		const get_id=user.find(c => c.id === parseInt(req.params.id));
     if(!get_id) res.status(402).send({
     	success:"false",
     	message:"id not found"
     });
     if(!req.body.email) {
    return res.status(400).send({
      success: 'false',
      message: 'email is required'
    });
     }
     else if(!req.body.firstname){
     	return res.status(400).send({
     		success:"false",
     		message:"firstname required"
     	});
     }
     get_id.email=req.body.email;
     get_id.firstname=req.body.firstname
     res.status(200).send({
     	success:"true",
     	message:"successfully updated",
     	get_id
     });
	}
	deleteUser(req,res){
		const get_id=user.find(c => c.id === parseInt(req.params.id));
	if(!get_id) res.status(402).send("id not found");

	const index=user.indexOf(get_id);
	user.splice(index,1);
	res.status(200).send({
		success:"true",
		message:"successfully deleted",
		get_id
	});
	}
}
const userController=new UsersController();
export default userController;

 
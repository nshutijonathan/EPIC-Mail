//import user from '../models/user';
import { Users, usersArray } from '../models/user'

class UsersController{
	static getALLusers(req,res){
		return res.send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			data:usersArray
		});
	}

	static getUser(req,res){
	 const get_id=usersArray.find((check_id) => check_id.id === parseInt(req.params.id));//c should be something
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
		const add= new Users({
		id:usersArray.length+1,
		email:req.body.email,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		password:req.body.password
	})
	if(!req.body.email) return res.status(402).send({
		status:402,
		success:"false",
		message:"email is required"
	});
	usersArray.push(add);
	 return res.status(200).send({
		status:200,
		success:"true",
		message:"successfully added",
		add
	});
	}
	static deleteUser(req,res){
		const get_id=usersArray.find(check_id => check_id.id === parseInt(req.params.id));
	if(!get_id) return res.status(402).send({
		status:402,
		success:"false",
		message:"id not found"
	});

	const index=usersArray.indexOf(get_id);
	usersArray.splice(index,1);
	return res.status(200).send({
		status:200,
		success:"true",
		message:"successfully deleted",
		get_id
	});
	}
}

export default UsersController;

 
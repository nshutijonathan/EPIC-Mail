//import user from '../models/user';
import { Users, usersArray } from '../models/user';

import validate from '../validations/validate'

import Joi from 'joi';
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
     	message:"User  not found"
     });
       	 return res.status(200).send({
       		status:200,
       		success:'true',
       		message:'user retrieved successfully',
       		get_id,
       	});
	}
	static createUser(req,res){
		const { error } = validate.validateuser(req.body);
		if(error) return res.status(402).send({
			status: 402,
			success:"false",
			message:"id not found",
			error: error.details[0].message
		});

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
		status:201,
		success:"true",
		message:"User successfully created",
		add
	});

	}
	static deleteUser(req,res){
		const get_id=usersArray.find(check_id => check_id.id === parseInt(req.params.id));
	if(!get_id) return res.status(402).send({
		status:402,
		success:"false",
		message:"User not found"
	});

	const index=usersArray.indexOf(get_id);
	usersArray.splice(index,1);
	return res.status(200).send({
		status:200,
		success:"true",
		message:"User successfully deleted",
		get_id
	});
	}
	// validateuser = (user) => {
	// 	console.log(validateuser);
	// 	// const schema = {
	// 	// 	email:Joi.string().email().min(2).max(20).required(),
	// 	// 	firstname:Joi.string().alphanum().min(2).max(20).required(),
	// 	// 	lastname:Joi.string().alphanum().min(2).max(20).required(),
	// 	// 	password:Joi.string().alphanum().min(2).max(20).required(),
	// 	// }
	// 	// return Joi.validate(user, schema);
	// };
}

export default UsersController;

 
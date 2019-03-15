//import contacts from '../models/contacts';
import { Contacts,contactsArray} from '../models/contacts';

import  validate from '../validations/validate'
class ContactsController{
	static getALLcontacts(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			contacts:contactsArray
		});
	}
	static get_one_contact(req,res){
	    const get_id=contactsArray.find((check_id)=> check_id.id === parseInt(req.params.id));//c should be something
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
	static createcontact(req,res){
		const { error } = validate.validatecontact(req.body);
		if(error) return res.status(402).send({
			status: 402,
			success:"false",
			message:"lastname not found",
			error: error.details[0].message
		});

		const add=new Contacts({
		id:contactsArray.length+1,
		email:req.body.email,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
	});
	
	//if(!req.body.email) return res.status(400).send({
		//status:400,
		//success:"false",
		//message:"email is required"
	//});
	contactsArray.push(add);
	 return res.status(201).send({
		status:201,
		success:"true",
		message:"successfully added",
		add
	});
	}
	static deletecontact(req,res){
		const get_id=contactsArray.find(check_id => check_id.id === parseInt(req.params.id));
	if(!get_id) return res.status(404).send({
		status:404,
		success:"false",
		message:"id not found"
	});

	const index=contactsArray.indexOf(get_id);
	contactsArray.splice(index,1);
	return res.status(200).send({
		status:200,
		success:"true",
		message:"successfully deleted",
		get_id
	});
	}
}
//const usercontacts=new ContactsController();
export default ContactsController;

 
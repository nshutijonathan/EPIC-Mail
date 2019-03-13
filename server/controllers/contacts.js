import contacts from '../modals/contacts';

class ContactsController{
	static getALLcontacts(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			contacts:contacts
		});
	}
	static get_one_contact(req,res){
		const get_id=contacts.find(check_id => check_id.id === parseInt(req.params.id));//c argument should be something
       if(!get_id) return res.status(402).send({
       	status:404,//status codes
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
		const add={
		id:contacts.length+1,
		email:req.body.email,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
	}
	if(!add.email) return res.status(400).send({
		status:400,
		success:"false",
		message:"email is required"
	});
	contacts.push(add);
	 return res.status(201).send({
		status:201,
		success:"true",
		message:"successfully added",
		add
	});
	}
	static deletecontact(req,res){
		const get_id=contacts.find(check_id => check_id.id === parseInt(req.params.id));
	if(!get_id) return res.status(404).send({
		status:404,
		success:"false",
		message:"id not found"
	});

	const index=contacts.indexOf(get_id);
	contacts.splice(index,1);
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

 
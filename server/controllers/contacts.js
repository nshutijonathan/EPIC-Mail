import contacts from '../modals/contacts';

class ContactsController{
	getALLcontacts(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			contacts:contacts
		});
	}
	get_one_contact(req,res){
		const get_id=contacts.find(check_id => check_id.id === parseInt(req.params.id));//c argument should be something
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
	createcontact(req,res){
		const add={
		id:contacts.length+1,
		email:req.body.email,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
	}
	if(!add.email) return res.status(402).send({
		status:402,
		success:"false",
		message:"email is required"
	});
	contacts.push(add);
	 return res.status(200).send({
		status:200,
		success:"true",
		message:"successfully added",
		add
	});
	}
	deletecontact(req,res){
		const get_id=contacts.find(check_id => check_id.id === parseInt(req.params.id));
	if(!get_id) return res.status(402).send({
		status:402,
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
const usercontacts=new ContactsController();
export default usercontacts;

 
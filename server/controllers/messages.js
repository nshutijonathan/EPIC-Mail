import messages from '../modals/messages';

class MessagesController{
	getALLmessages(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			messages:messages
		});
	}
	get_one_message(req,res){
		const get_id=messages.find(check_id => check_id.id === parseInt(req.params.id));//c argument should be something
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
	createmessage(req,res){
		const add={
		id:messages.length+1,
		createdOn:req.body.createdOn,
		subject:req.body.subject,
		message:req.body.message,
		parentMessageId:req.body.parentMessageId,
		status:req.body.status
	}
	if(!add.createdOn) return res.status(400).send({
		status:400,
		success:"false",
		message:"createdOn is required"
	});
	if(!add.subject) return res.status(400).send({
		status:400,
		success:"false",
		message:"subject is required"

	});
	if(!add.message) return res.status(400).send({
		status:400,
		success:"false",
		message:"message is required"

	});
	if(!add.parentMessageId) return res.status(400).send({
		status:400,
		success:"false",
		message:"parentMessageId is required"

	});
	if(!add.status) return res.status(400).send({
		status:400,
		success:"false",
		message:"status is required"

	});

	messages.push(add);
	 return res.status(201).send({
		status:201,
		success:"true",
		message:"successfully added",
		add
	});
	}
	deletemessage(req,res){
		const get_id=messages.find(check_id => check_id.id === parseInt(req.params.id));
	if(!get_id) return res.status(404).send({
		status:404,
		success:"false",
		message:"id not found"
	});

	const index=messages.indexOf(get_id);
	messages.splice(index,1);
	return res.status(200).send({
		status:200,
		success:"true",
		message:"successfully deleted",
		get_id
	});
	}
}
const usermessages=new MessagesController();
export default usermessages;

 
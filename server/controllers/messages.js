//import messages from '../models/messages';
import { Messages,messagesArray} from '../models/messages'
class MessagesController{
	static getALLmessages(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			messages:messagesArray
		});
	}
	static get_one_message(req,res){
		const get_id=messagesArray.find(check_id => check_id.id=== parseInt(req.params.id));//c argument should be something
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
	static createmessage(req,res){
		const add=new Messages({
		id:messagesArray.length+1,
		createdOn:req.body.createdOn,
		subject:req.body.subject,
		message:req.body.message,
		parentMessageId:req.body.parentMessageId,
		status:req.body.status
	})
	if(!req.body.createdOn) return res.status(400).send({
		status:400,
		success:"false",
		message:"createdOn is required"
	});
	if(!req.body.subject) return res.status(400).send({
		status:400,
		success:"false",
		message:"subject is required"

	});
	if(!req.body.message) return res.status(400).send({
		status:400,
		success:"false",
		message:"message is required"

	});
	if(!req.body.parentMessageId) return res.status(400).send({
		status:400,
		success:"false",
		message:"parentMessageId is required"

	});
	if(!req.body.status) return res.status(400).send({
		status:400,
		success:"false",
		message:"status is required"

	});

	messagesArray.push(add);
	 return res.status(201).send({
		status:201,
		success:"true",
		message:"successfully added",
		add
	});
	}
	static deletemessage(req,res){
		const get_id=messagesArray.find(check_id => check_id.id=== parseInt(req.params.id));
	if(!get_id) return res.status(404).send({
		status:404,
		success:"false",
		message:"id not found"
	});

	const index=messagesArray.indexOf(get_id);
	messagesArray.splice(index,1);
	return res.status(200).send({
		status:200,
		success:"true",
		message:"successfully deleted",
		get_id
	});
	}
}
//const usermessages=new MessagesController();
export default MessagesController;

 
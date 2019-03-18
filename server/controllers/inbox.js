//import inbox from '../models/inbox';
import {Messages,inboxArray} from '../models/inbox' 
class InboxController{
	static getALLinbox(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			inboxArray, 
		});
	}
	static get_one_inbox(req,res){
	const get_id=inboxArray.find(check_id => check_id.receiverid=== parseInt(req.params.id));
       if(!get_id) return res.status(402).send({
       	status:404,//status codes
     	success:"false",
     	message:"Message not found"
     });
       	 return res.status(200).send({
       		status:200,
       		success:'true',
       		message:'message retrieved successfully',
       		data:get_id
       	});
	}
	
	
}

export default InboxController;


 
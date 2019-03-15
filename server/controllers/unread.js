//import sents from '../models/sents';
import {Unread,unreadArray} from '../models/unread' 
class UnreadController{
	static getunread(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			unreadArray, 
		});
	}
	static get_one_unread(req,res){
	const get_id=unreadArray.find(check_id => check_id.status=== parseInt(req.params.id));
       if(!get_id) return res.status(402).send({
       	status:404,//status codes
     	success:"false",
     	message:"id not found"
     });
       	 return res.status(200).send({
       		status:200,
       		success:'true',
       		message:'id retrieved successfully',
       		data:get_id
       	});
	}
	static deleteunread(req,res){
		const get_id=unreadArray.find(check_id => check_id.status=== parseInt(req.params.id));
	if(!get_id) return res.status(404).send({
		status:404,
		success:"false",
		message:"id not found"
	});

	const index=unreadArray.indexOf(get_id);
	unreadArray.splice(index,1);
	return res.status(200).send({
		status:200,
		success:"true",
		message:"successfully deleted",
		get_id
	});
	}
}
//const usersents=new SentsController();
export default UnreadController;

 
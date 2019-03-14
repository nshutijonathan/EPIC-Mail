//import sents from '../models/sents';
import {Sents,sentsArray} from '../models/sents' 
class SentsController{
	static getsents(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			sentsArray, 
		});
	}
	static get_one_sent(req,res){
	const get_id=sentsArray.find(check_id => check_id.senderid=== parseInt(req.params.id));
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
	static createsent(req,res){
		const add=new Sents({
		senderId:sentsArray.length+1,
		messageId:req.body.messageId,
		createdOn:req.body.createdOn
	})
	if(!req.body.messageId) return res.status(400).send({
		status:400,
		success:"false",
		message:"messageId is required"
	});
	if(!req.body.createdOn) return res.status(400).send({
		status:400,
		success:"false",
		message:"createdOn is required"

	});
	
	 sentsArray.push(add);
	 return res.status(201).send({
		status:"201",
		success:"true",
		message:"successfully added",
		add
	});
	}
	static deletesent(req,res){
		const get_id=sentsArray.find(check_id => check_id.senderid === parseInt(req.params.id));
	if(!get_id) return res.status(404).send({
		status:404,
		success:"false",
		message:"id not found"
	});

	const index=sentsArray.indexOf(get_id);
	sentsArray.splice(index,1);
	return res.status(200).send({
		status:200,
		success:"true",
		message:"successfully deleted",
		get_id
	});
	}
}
//const usersents=new SentsController();
export default SentsController;

 
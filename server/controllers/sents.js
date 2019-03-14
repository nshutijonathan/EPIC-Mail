import sents from '../modals/sents';

class SentsController{
	static getsents(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			sents, 
		});
	}
	static get_one_sent(req,res){
	const get_id=sents.find(check_id => check_id.senderid=== parseInt(req.params.id));
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
		const add={
		senderId:sents.length+1,
		messageId:req.body.messageId,
		createdOn:req.body.createdOn
	}
	if(!add.messageId) return res.status(400).send({
		status:400,
		success:"false",
		message:"messageId is required"
	});
	if(!add.createdOn) return res.status(400).send({
		status:400,
		success:"false",
		message:"createdOn is required"

	});
	
	 sents.push(add);
	 return res.status(201).send({
		status:"201",
		success:"true",
		message:"successfully added",
		add
	});
	}
	static deletesent(req,res){
		const get_id=sents.find(check_id => check_id.senderid === parseInt(req.params.id));
	if(!get_id) return res.status(404).send({
		status:404,
		success:"false",
		message:"id not found"
	});

	const index=sents.indexOf(get_id);
	sents.splice(index,1);
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

 
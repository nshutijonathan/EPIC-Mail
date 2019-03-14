import inbox from '../modals/inbox';

class InboxController{
	static get_all_inbox(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			inbox, 
		});
	}
	static get_one_inbox(req,res){
	const get_id=sents.find(check_id => check_id.receiverid=== parseInt(req.params.id));
       if(!get_id) return res.status(402).send({
       	status:404,/
     	success:"false",
     	message:"id not found"
     });
       	 return res.status(200).send({
       		status:200,
       		success:'true',
       		message:'id retrieved successfully',
       		inbox:get_id
       	});
	}
	static createinbox(req,res){
		const inboxes={
	    receiverid:inbox.length+1,
		messageid:req.body.messageId,
		createdon:req.body.createdOn
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
	
	 inboxes.push(inbox);
	 return res.status(201).send({
		status:"201",
		success:"true",
		message:"successfully added",
		inboxes
	});
	}
	static deletesent(req,res){
		const get_id=inbox.find(check_id => check_id.receiverid=== parseInt(req.params.id));
	if(!get_id) return res.status(404).send({
		status:404,
		success:"false",
		message:"id not found"
	});

	const index=inbox.indexOf(get_id);
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
export default InboxController;

 
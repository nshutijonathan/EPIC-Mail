const sentsArray= [
{
    senderid:1,
	messageId:'2345',
	createdon:'12/04/2008'
},

{
    senderid:2,
	messageId:'2345',
	createdon:"12/04/2008"
}

]

class Sents{
    constructor({
        senderId,
        messageId,
        createdOn

    }){
        this.senderId=senderId;
        this.messageId=messageId;
        this.createdOn=createdOn;
    }

    
}

export {Sents,sentsArray};



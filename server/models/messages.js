const messagesArray= [
{
    id:1,
    createdOn:"may/02/2018",
    subject:"'Invitation",
    message:"hello i love you",
    parentMessageId:"1234",
    status:"read"
},

{
    id:2,
    createdOn:"may/02/2018",
    subject:"'Invitation",
    message:"hello i love you",
    parentMessageId:"1234",
    status:"read"
}
]

class Messages{
    constructor({
        id,
        createdOn,
        subject,
        message,
        parentMessageId,
        status

    }){
        this.id = id;
        this.createdOn=createdOn;
        this.subject = subject;
        this.parentMessageId = parentMessageId;
        this.status=status
    }

    
}

export {Messages,messagesArray};



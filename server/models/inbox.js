const inboxArray= [
{
    receiverid:1,
	messageid:'2345',
	createdon:'12/04/2008'
},

{
    receiverid:2,
	messageid:'2345',
	createdon:"12/04/2008"
}

]

class Inbox{
    constructor({
        receiverid,
        messageid,
        createdon

    }){
        this.receiverid=receiverid;
        this.messageid=messageid;
        this.createdon=createdon;
    }

    
}

export {Inbox,inboxArray};



const contactsArray= [
{
	id:1,
	email:"nshutijonathan130@gmail.com",
	firstname:"nshuti",
	lastnane:"jonathan"
},

{
	id:1,
	email:"nshutijonathan130@gmail.com",
	firstname:"nshuti",
	lastnane:"jonathan"
}
]

class Contacts{
	constructor({
		id,
		email,
		firstname,
		lastname
	}){
		this.id = id;
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;

	}

	
}

export {Contacts,contactsArray};



const usersArray= [
{
	id:1,
	email:"nshutijonathan130@gmail.com",
	firstname:"nshuti",
	lastname:"jonathan",
	password:"keke",
},

{
	id:2,
	email:"muneza130@Andela.com",
	firstname:"christian",
	lastname:"muneza",
	password:"fifi",
}
]

class Users {
	constructor({
		id,
		email,
		firstname,
		lastname,
		password
	}){
		this.id = id;
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;

	}

	
}

export {Users, usersArray };



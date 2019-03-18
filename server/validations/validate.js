import Joi from 'joi';

class Validate {

 validateuser(user)	{
	const schema = {		
		email:Joi.string().email().min(2).max(20).required(),
		firstname:Joi.string().alphanum().min(2).max(20).required(),
		lastname:Joi.string().alphanum().min(2).max(20).required(),
		password:Joi.string().alphanum().min(2).max(20).required(),
	}
	return Joi.validate(user, schema);
}
	validatecontact(contact){
		const schema2={
			email:Joi.string().email().min(2).max(20).required(),
	        firstname:Joi.string().alphanum().min(2).max(20).required(),
	        lastname:Joi.string().alphanum().min(2).max(20).required(),
		}
	
	return Joi.validate(contact, schema2);
}
    validatemessage(message){
    	const schema3={
    		
    	}
    }
};


const validate = new Validate();

export default validate;

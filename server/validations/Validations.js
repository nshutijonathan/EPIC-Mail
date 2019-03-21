import Joi from 'joi';

export default class Validations {
	static userLogin(user){
		const userDataSchema = {
			email : Joi.string().email().required(),
			password : Joi.string().regex(/˄[a-zA-Z0-9]{6,16}$/).min(6).required()
		}
		return Joi.validate(user, userDataSchema);
	}
	static userSignup(user){
		const userDataSchema2={
			email: Joi.string().email({ minDomainAtoms: 2 }),
			firstname:Joi.string().alphanum().min(3).max(20).required(),
			lastname:Joi.string().alphanum().min(3).max(20).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
		}
		return Joi.validate(user,userDataSchema2);
	}
}
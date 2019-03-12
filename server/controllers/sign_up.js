import users from '../modals/user';

class Sign_up_controller{
	getusers(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			signed_up:users
		});

	};



}
const UserController=new Sign_up_controller();
export default UserController;
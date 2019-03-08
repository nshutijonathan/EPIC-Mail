import express from 'express';
import user from './modals/user';

//set up the express app

const app=express();
//get welcome message

app.get('/',(req,res)=>{
	res.status(200).send({
		success:"true",
		message:"Welcome to Epic"
	});

});
app.get('/api/v1/users',(req,res)=>{
	res.status(200).send({
		success:"true",
		message:"successfully in",
		epic:user
	});

});

const port=process.env.PORT ||3000;
app.listen(port,()=> console.log(`listening on port ${port}`));
export default app;
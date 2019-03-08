import express from 'express';
import bodyParser from 'body-parser';
import user from './modals/user';

//set up the express app

const app=express();
//parse incoming requests data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
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
app.post('/api/v1/users',(req,res)=>{
	const add={
		id:user.length+1,
		email:req.body.email,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		password:req.body.password
	}
	user.push(add);
	res.status(200).send({
		success:"true",
		message:"successfully added",
		add
	});

});
app.get('/api/v1/users/:id', (req, res)=>{
	 const get_id=user.find(c => c.id === parseInt(req.params.id));
     if(!get_id) res.status(402).send("id not found");
     res.send(get_id);
});
app.delete('/api/v1/users/:id',(req,res)=>{
	const get_id=user.find(c => c.id === parseInt(req.params.id));
	if(!get_id) res.status(402).send("id not found");

	const index=user.indexOf(get_id);
	user.splice(index,1);
	res.send(get_id);

});
const port=process.env.PORT ||3000;
app.listen(port,()=> console.log(`listening on port ${port}`));
export default app;
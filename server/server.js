import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes.js';
//set up the express app

const app=express();
//parse incoming requests data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);
//get welcome message
app.get('/',(req,res)=>{
	res.status(200).send("welcome to epic mail");
});

const port=process.env.PORT ||3000;
app.listen(port,()=> console.log(`listening on port ${port}`));
export default app;

import pool from '../database/db';
import JWT from 'jsonwebtoken';
import {keys,verifyToken}  from '../helpers/config';
class Messages{
	static Createmsg(req,res){
		const data = {
          createdon:req.body.createdon,		
          subject:req.body.subject,
          message:req.body.message,
          parentmessageid:req.body.parentmessageid,
          status:req.body.status
    }
	pool.connect((err, client, done) => {
      const query = 'INSERT INTO messages(createdon,subject,message,parentmessageid,status) VALUES($1,$2,$3,$4,$5) RETURNING *';
      const values = [data.createdon,data.subject, data.message, data.parentmessageid,data.status];

      client.query(query,values,(error,result)=>{
        if(error) console.log(error);
      	console.log(result);
      	done();
      	if (error){
      		res.status(400).json({error});
      	}
      	res.status(201).send({
      		status:'201',
      		message:"successfully",
      		result:result.rows[0]
      	});
      })
})
}
     static getallmessages(req,res){
      const data={
          createdon:req.body.createdon,  
      }
      pool.connect((err,client,done)=>{
        const query='SELECT * FROM messages WHERE createdon=$1';
        const values=[req.body.createdon]
        client.query(query,values,(error,result)=>{
          if(error) console.log(error);
          console.log(result);
          done();
          if(error){
            res.status(400).json({error});
          }
          res.status(200).send({
            status:'200',
            message:"successfully",
            result:result.rows[0]
          })
        })
      })
     }

}
export default Messages;
import express from 'express';
import {secret,verifyToken} from '../helpers/config';
import pool from '../database/db';
import JWT from 'jsonwebtoken';
import Validations from '../validations/Validations'
class User{
  static sign_up(req,res){
    const validate = Validations.userSignup(req.body);
      if (validate.error) {
        console.log(validate.error);
        return res.status(422).json({
          status: 422,
          error : validate.error
        })
      }
    const data = {
      email:req.body.email,   
      firstname : req.body.firstname,
      lastname : req.body.lastname,
      password : req.body.password,
    }
  pool.connect((err, client, done) => {
      const query = "INSERT INTO users(email,firstname,lastname, password) VALUES($1,$2,$3,$4) RETURNING *";
      const values = [data.email,data.firstname, data.lastname, data.password];

      client.query(query,values,(error,result)=>{
        console.log(result);
        done();
        if (error){
          console.log(error);
           return res.status(400).json({error});
        }
        //token generation
        const token = JWT.sign({email:data.email}, secret.secret,{expiresIn: 86400});
        return res.status(201).send({
          status:'201',
          data:{
            token:token
          }
          //result:result.rows[0]
        });
      })
})
}
     static sign_in(req,res){
      const validate = Validations.userLogin(req.body);
      if (validate.error) {
        return res.status(422).json({
          status: 422,
          error : validate.error
        })
      }
      const data={
        email:req.body.email,
        password:req.body.password
      }
      pool.connect((err,client,done)=>{
        const query="SELECT * FROM users WHERE email=$1 AND password=$2";
        const values=[req.body.email,req.body.password]
        client.query(query,values,(error,result)=>{
          console.log(result);
        
          if(error){
            console.log(error)
            return res.status(404).json({error});
           
          }
          if(!result.rows[0]){
            return res.status(404).send({
              status:404,
              error:'INVALID EMAIL OR password'
            });

          }
          else{
            //toke generation
            const token = JWT.sign({email:data.email}, secret.secret, {expiresIn: 86400});
            return res.status(200).send({
              status:200,
              data:{
                token:token
              }
          })
        }

        });
      });
     }
}
export default User;
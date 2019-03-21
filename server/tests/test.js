import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.should();
chai.use(chaiHttp);
var token='';

 describe('Welcome page', () => {
    it('it should open the first page', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          done();
        });
    });
  });
  describe('User registration',()=>{
  	it('it should sign up the user',(done)=>{
  		chai.request(server)
  		.post('/api/v2/auth/signup')
  		.send({
  			email:"aime@gmail.com",
  			firstname:"rukundo",
  			lastname:"innocent",
  			password:"werty"
  		})
  		.end((err,res)=>{
  			res.should.have.status(201);
  			res.body.should.be.an('object');
  			res.body.data.should.be.a('object');
  			token = res.body.data[0].token;
  			done();
  		})
  	})
  	it('it should not create user bcz empty fields',(done)=>{
  		chai.request(server)
  		.post('/api/v2/auth/signup')
  		.send({
  			email:'',
  			firstname:'brack',
  			lastname:'major',
  			password:'uhuru'
  		})
  		.end((err,res)=>{
  			res.should.have.status(400);
  			res.body.should.be.an('object');
  			done();
  		})
  	})
  })

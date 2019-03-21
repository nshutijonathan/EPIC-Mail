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
  			res.body.should.be.an(object);
  			token = res.body.data[0].token;
  			done();
  		})
  	})
  })

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();

describe('get all users',()=>{
	it('should return all users',(done)=>{
		chai.request(server)
		.get('/api/v1/users')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(200);
			res.body.should.have.property('success').eql("true");
			res.body.should.have.property("message").eql("retrieved successfully");
			done();
		
		});

	});

});
describe('get one user',()=>{
	it('should be able to get one user',(done)=>{
		chai.request(server)
		.get('/api/v1/users/1')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(200);
			res.body.should.have.property('success').eql("true");
			res.body.should.have.property("message").eql('id retrieved successfully');
			done();
		});

	});

});
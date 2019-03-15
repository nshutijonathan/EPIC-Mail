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

	it('should not be able to get one user',(done)=>{
		chai.request(server)
		.get('/api/v1/users/2345')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(402);
			res.body.should.have.property('success').eql("false");
			res.body.should.have.property('message').eql("id not found");
			done();

		});

   	});

});

describe('Creating a user',()=>{
	it('should create a user',(done)=>{
		const user={
			email:"kuku@gmail.com",
			firstname:"lulu",
			lastname:"kendla",
			password:"zero"
		};
		chai.request(server)
		.post('/api/v1/users')
		.send(user)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(200);
			res.body.should.have.property('success').eql("true");
			res.body.should.have.property("message").eql("successfully added");
			done();

		});
		

	});
	

});
describe('deleting a user',()=>{
	it('should delete a user',(done)=>{
     chai.request(server)
     .delete('/api/v1/users/1')
     .end((err,res)=>{
     	res.body.should.be.an('object');
     	res.body.should.have.property("status").eql(200);
     	res.body.should.have.property('success').eql("true");
     	res.body.should.have.property('message').eql("successfully deleted");
     	done();
    });
	});
	it('should not be able to delate user',(done)=>{
		chai.request(server)
		.delete('/api/v1/users/45678')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property("status").eql(402);
			res.body.should.have.property('success').eql("false");
			res.body.should.have.property('message').eql("id not found");
			done();
		});

	});
})
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();

describe('get all contacts',()=>{
	it('should return all contacts',(done)=>{
		chai.request(server)
		.get('/api/v1/contacts')
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
describe('get one contact',()=>{
	it('should be able to get one contact',(done)=>{
		chai.request(server)
		.get('/api/v1/contacts/1')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(200);
			res.body.should.have.property('success').eql("true");
			res.body.should.have.property("message").eql('id retrieved successfully');
			done();
		});

	});
	it('should not be able to get one contact',(done)=>{
		chai.request(server)
		.get('/api/v1/contacts/1234567')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(402);
			res.body.should.have.property('success').eql("false");
			res.body.should.have.property('message').eql("id not found");
			done();

		});

	});

});

describe('Creating a contact',()=>{
	it('should create a contact',(done)=>{
		const contacts ={
			email:"kuku@gmail.com",
			firstname:"lulu",
			lastname:"kendla"
		};
		chai.request(server)
		.post('/api/v1/contacts')
		.send(contacts)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(201);
			res.body.should.have.property('success').eql("true");
			res.body.should.have.property("message").eql("successfully added");
			done();

		});
		

	});
	it('should not be able to create a user',(done)=>{
		 const contacts={
		 	email:"",
		 	firstname:"lulu",
			lastname:"kendla",
			password:"zero"
		 };
		 chai.request(server)
		 .post('/api/v1/contacts')
		 .send(contacts)
		 .end((err,res)=>{
		 	console.log(res.body);
		 	res.body.should.be.an('object');
		 	res.body.should.have.property('status').eql(400);
		 	res.body.should.have.property('success').eql("false");
		 	res.body.should.have.property('message').eql("email is required");
		 	done();
		 });
	});

});
describe('deleting a contact',()=>{
	it('should delete a contact',(done)=>{
     chai.request(server)
     .delete('/api/v1/contacts/1')
     .end((err,res)=>{
     	res.body.should.be.an('object');
     	res.body.should.have.property("status").eql(200);
     	res.body.should.have.property('success').eql("true");
     	res.body.should.have.property('message').eql("successfully deleted");
     	done();
    });
	});
	it('should not be able to delate a contact',(done)=>{
		chai.request(server)
		.delete('/api/v1/contacts/45678')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property("status").eql(404);
			res.body.should.have.property('success').eql("false");
			res.body.should.have.property('message').eql("id not found");
			done();
		});

	});
})
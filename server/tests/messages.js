import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();

describe('get all messages',()=>{
	it('should return all messages',(done)=>{
		chai.request(server)
		.get('/api/v1/messages')
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
describe('get one message',()=>{
	it('should be able to get one message',(done)=>{
		chai.request(server)
		.get('/api/v1/messages/1')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(200);
			res.body.should.have.property('success').eql("true");
			res.body.should.have.property("message").eql('id retrieved successfully');
			done();
		});

	});
	it('should not be able to get one message',(done)=>{
		chai.request(server)
		.get('/api/v1/messages/2345')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(404);
			res.body.should.have.property('success').eql("false");
			res.body.should.have.property('message').eql("id not found");
			done();

		});

	});

});

describe('Creating a message',()=>{
	it('should create a message',(done)=>{
		const messages ={
			  createdOn: "may/02/2018",
              subject: "'Invitation",
              message: "hello i love you",
              parentMessageId: "1234",
              status: "uread"
		};
		chai.request(server)
		.post('/api/v1/messages')
		.send(messages)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(201);
			res.body.should.have.property('success').eql("true");
			res.body.should.have.property("message").eql("successfully added");
			done();

		});
		

	});
	it('should not be able to create a message',(done)=>{
		 const messages={
		 	  createdOn: "",
              subject: "'Invitation",
              message: "hello i love you",
              parentMessageId: "1234",
              status: "uread"
		 };
		 chai.request(server)
		 .post('/api/v1/messages')
		 .send(messages)
		 .end((err,res)=>{
		 	console.log(res.body);
		 	res.body.should.be.an('object');
		 	res.body.should.have.property('status').eql(400);
		 	res.body.should.have.property('success').eql("false");
		 	res.body.should.have.property('message').eql("createdOn is required");
		 	done();
		 });
	});

});
describe('deleting a message',()=>{
	it('should delete a message',(done)=>{
     chai.request(server)
     .delete('/api/v1/messages/1')
     .end((err,res)=>{
     	res.body.should.be.an('object');
     	res.body.should.have.property("status").eql(200);
     	res.body.should.have.property('success').eql("true");
     	res.body.should.have.property('message').eql("successfully deleted");
     	done();
    });
	});
	it('should not be able to delete a message',(done)=>{
		chai.request(server)
		.delete('/api/v1/messages/45678')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property("status").eql(404);
			res.body.should.have.property('success').eql("false");
			res.body.should.have.property('message').eql("id not found");
			done();
		});

	});
})
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();

describe('get all sents',()=>{
	it('should return all sents ',(done)=>{
		chai.request(server)
		.get('/api/v1/sents')
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
describe('get one sent',()=>{
	it('should be able to get one sent message',(done)=>{
		chai.request(server)
		.get('/api/v1/sents/1')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(200);
			res.body.should.have.property('success').eql("true");
			res.body.should.have.property("message").eql('id retrieved successfully');
			done();
		});

	});
	it('should not be able to get one sent',(done)=>{
		chai.request(server)
		.get('/api/v1/sents/2345')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(404);
			res.body.should.have.property('success').eql("false");
			res.body.should.have.property('message').eql("id not found");
			done();

		});

	});

});

describe('Creating a sent',()=>{
	it('should create a sent',(done)=>{
		const sents ={
			  senderid:"12345",
              messageid: "'I990",
              createdon:"4/08/2019"
		};
		chai.request(server)
		.post('/api/v1/sents')
		.send(sents)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();

		});
		

	});
	it('should not be able to create a sent message',(done)=>{
		 const sents={
		 	   senderId: "",
               messageId: "I990",
               createdOn:"4/08/2019"
		 };
		 chai.request(server)
		 .post('/api/v1/sents')
		 .send(sents)
		 .end((err,res)=>{
		 	console.log(res.body);
		 	res.body.should.be.an('object');
		 	done();
		 });
	});

});
describe('deleting a sent',()=>{
	it('should delete a sent message',(done)=>{
     chai.request(server)
     .delete('/api/v1/sents/1')
     .end((err,res)=>{
     	res.body.should.be.an('object');
     	res.body.should.have.property("status").eql(200);
     	res.body.should.have.property('success').eql("true");
     	res.body.should.have.property('message').eql("successfully deleted");
     	done();
    });
	});
	it('should not be able to delete a sent',(done)=>{
		chai.request(server)
		.delete('/api/v1/sents/45678')
		.end((err,res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property("status").eql(404);
			res.body.should.have.property('success').eql("false");
			res.body.should.have.property('message').eql("id not found");
			done();
		});

	});
})
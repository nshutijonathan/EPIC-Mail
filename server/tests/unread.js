import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();

describe('get all unread',()=>{
	it('should return all unread ',(done)=>{
		chai.request(server)
		.get('/api/v1/message/unread')
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


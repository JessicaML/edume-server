
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('./app');

chai.use(chaiHttp);
chai.should();
describe("App", () => {
  describe('GET /', () => {
    it('it should return Welcome message', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.to.be.html;
          res.text.should.be.equal("Hello World!");
          done();
        });
    });
  });
  describe("GET /t9", () => {
    it("should get the t9 object", (done) => {
      chai.request(app)
        .get('/t9')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.to.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('3').eql(['d', 'e', 'f']);
          done();
      });
    });
  });
});
const { expect } = require('chai');
const request = require('supertest');
const server = require('./api');

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('Correct result?', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });



  after(() => {
    server.close(); // Close the server after all tests are completed
  });
});

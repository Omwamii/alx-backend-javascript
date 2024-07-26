const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done() to indicate that the test is complete
      })
      .catch((error) => {
        done(error); // Call done with error if the promise rejects (though not expected here)
      });
  });

  it('should return undefined when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.undefined; // Expect undefined response when success is false
        done(); // Call done() to indicate that the test is complete
      })
      .catch((error) => {
        done(error); // Call done with error if the promise rejects (though not expected here)
      });
  });
});

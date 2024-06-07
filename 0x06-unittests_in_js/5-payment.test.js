const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Spy on console.log to capture output
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log the correct total for 100 and 20', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    // Expect console.log to be called with correct message
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.firstCall.args[0]).to.equal(`The total is: ${totalAmount + totalShipping}`);
  });

  it('should log the correct total for 10 and 10', () => {
    const totalAmount = 10;
    const totalShipping = 10;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    // Expect console.log to be called with correct message
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.firstCall.args[0]).to.equal(`The total is: ${totalAmount + totalShipping}`);
  });
});

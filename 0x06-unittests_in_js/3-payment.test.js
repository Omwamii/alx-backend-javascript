const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments for SUM', () => {
    const totalAmount = 100;
    const totalShipping = 20;
    sendPaymentRequestToApi(totalAmount, totalShipping);

    // Assert that Utils.calculateNumber was called with expected arguments
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
  });

  it('should log the correct total', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    // Stub console.log to capture output
    const consoleStub = sinon.stub(console, 'log');
    sendPaymentRequestToApi(totalAmount, totalShipping);

    // Expect console.log to be called with correct message
    expect(consoleStub.calledOnce).to.be.true;
    expect(consoleStub.firstCall.args[0]).to.equal(`The total is: ${totalAmount + totalShipping}`);

    // Restore the console.log stub
    consoleStub.restore();
  });
});

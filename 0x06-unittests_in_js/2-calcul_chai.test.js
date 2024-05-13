const { expect } = require('chai');
const fn = require('./2-calcul_chai')

describe('Tests for calculateNumber', () => {
  it('Rounds and add both numbers', () => {
    const result = fn('SUM', 1.4, 4.5);
    expect(result).to.equal(6);
  });

  it('Rounds and subtracts the numbers', () => {
    const result = fn('SUBTRACT', 1.4, 4.5);
    expect(result).to.equal(-4);
  });

  it('Rounds and divides both numbers', () => {
    const result = fn('DIVIDE', 1.4, 4.5);
    expect(result).to.equal(0.2);
  });

  it('Test for divide by zero error', () => {
    const result = fn('DIVIDE', 1.4, 0);
    expect(result).to.equal('Error');
  });
});

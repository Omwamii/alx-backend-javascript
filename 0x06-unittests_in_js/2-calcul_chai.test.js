import calculateNumber from './2-calcul_chai.js';
import { expect } from 'chai';

const fn = calculateNumber;

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

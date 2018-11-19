const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('returns an empty array given no match', () => {
    expect(twoSum([], 0)).to.eql([]);
  });
});

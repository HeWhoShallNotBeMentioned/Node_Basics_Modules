const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns one line if string is shorter than index', () => {
    expect(wrap('abc def', 15)).to.equal('abc def');
  });

  it('Returns one line if no spaces and string is longer than index', () => {
    expect(wrap('abcalkjflksjfdljfsalkjsfaf', 15)).to.equal(
      'abcalkjflksjfdljfsalkjsfaf'
    );
  });

  it('Returns 4 lines if there are spaces', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    );
  });
});

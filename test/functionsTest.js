const chai = require('chai');
const assert = chai.assert;
let onlyOdd = require('../functions').onlyOdd;

describe('onlyOdd', ()=> {
  it('should convert a string to only contain odd indices', () =>{
    assert.equal(onlyOdd('hey there'), 'e hr');
    assert.equal(onlyOdd('hi there'), 'itee');
    assert.equal(onlyOdd('ohiekldlto'), 'hello');
    assert.equal(onlyOdd('o'), '');
    assert.equal(onlyOdd(''), '');
    assert.equal(onlyOdd(20), '');
    assert.equal(onlyOdd(), '');
  });
});

const { expect } = require('chai');
const sum = require('./../sum.js');


describe('Sum function', () => {
    it("Positive", done => {
        expect(sum(1, 2)).to.equal(3);
        done();
    })
    it("Negative", done => {
        expect(sum("a", 1)).to.equal("Invalid input");
        done();
    })
})
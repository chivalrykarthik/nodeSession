const { expect } = require('chai');

const axios = require('axios');
describe('Sample website', () => {
    it('Root page', done => {
        axios.get("http://localhost:3000")
            .then(value => value)
            .then(value => {
                let msg = { msg: "Hello world" };
                //expect(value.data.msg).to.equal('Hello world1')
                expect(value.data).to.deep.equal(msg);
                done();
            })
            .catch(e => console.log(e.message));
    })

    it('Root page1', done => {
        axios.get("http://localhost:3000")
            .then(value => value)
            .then(value => {
                let msg = { msg: "Hello world" };
                //expect(value.data.msg).to.equal('Hello world1')
                expect(value.data).to.deep.equal(msg);
                done();
            })
            .catch(e => console.log(e.message));
    })
})



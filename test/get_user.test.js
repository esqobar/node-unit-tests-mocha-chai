const expect = require('chai').expect
let chai = require('chai')
const { before } = require('mocha')
const axios = require("axios");
const {API_URL, createUser} = require("./utils.test");
let should = chai.should()

let newUser = undefined

before(async () => {
    newUser = await createUser()
})

describe('Get User Information', function () {
    it("Get A User", async () => {
        const response = await axios.get(API_URL + '/user/' + newUser._id)
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an("object")
    })
    it('should have all the properties for each user', async () => {
        const response = await axios.get(API_URL + '/user/' + newUser._id)
        console.log(response.data)

        expect(response.data.name).to.be.equal('Test Juma')
        expect(response.data.email).to.be.equal('test@gmail.com')
        expect(response.data.age).to.be.equal(25)

        response.data.should.have.property('name')
        response.data.should.have.property('email')
        response.data.should.have.property('age')

        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an("object")
    });
})
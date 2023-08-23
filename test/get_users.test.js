const expect = require('chai').expect
let chai = require('chai')
const axios = require("axios");
const {API_URL, createUser} = require("./utils.test");
const {before} = require("mocha");
let should = chai.should()

before(async () => {
    newUser = await createUser()
})

describe('Get Users Information', function () {
    it("Get All Users List", async () => {
        const response = await axios.get(API_URL + '/users')
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an("array")
    })
})
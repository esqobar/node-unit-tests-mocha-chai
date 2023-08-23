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

describe('Delete User Information', function () {
    createUser()
    it("Delete A User", async () => {
        const response = await axios.delete(API_URL + '/user/' + newUser._id)
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an("object")
    })
})
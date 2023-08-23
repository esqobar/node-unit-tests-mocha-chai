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

describe('Update User Information', function () {
    it("Update A User", async () => {
        const payload = {
            name: "John Doe",
            email: "doe@gmail.com",
            age: 28,
        }

        const response = await axios.put(API_URL + '/user/' + newUser._id, payload)
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an("object")
    })
    it("Update A User's name", async () => {
        const payload = {
            name: "Jane Doe",
        }

        const response = await axios.put(API_URL + '/user/' + newUser._id, payload)
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an("object")
    })
    it("Update A User's email", async () => {
        const payload = {
            email: "janeDoe@gmail.com",
        }

        const response = await axios.put(API_URL + '/user/' + newUser._id, payload)
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an("object")
    })
    it("Update A User's age", async () => {
        const payload = {
            age: 20,
        }

        const response = await axios.put(API_URL + '/user/' + newUser._id, payload)
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an("object")
    })
    it("Update A User with wrong user ID", async () => {
        try{
            const payload = {
                name: "John  to new user Doe",
                email: "doe@gmail.com",
                age: 28,
            }

            const response = await axios.put(API_URL + '/user/' + 899393, payload)
            expect(response.status).to.be.equal(200)
            expect(response.data).to.be.an("object")
        } catch (error) {
          if(error.response) {
              expect(error.response.status).not.to.be.equal(200)
          } else {
              throw error
          }
        }
    })
    it("Update A User with new email", async () => {
        const payload = {
            email: "janeDoe@gmail.com",
        }

        const response = await axios.put(API_URL + '/user/' + newUser._id, payload)
        expect(response.status).to.be.equal(200)
        console.log(response.data.email)
        expect(response.data.email).not.to.be.equal("janehDoe@gmail.com")
        expect(response.data).to.be.an("object")
    })
    it("Update A User with new age", async () => {
        const payload = {
            age: 28,
        }

        const response = await axios.put(API_URL + '/user/' + newUser._id, payload)
        expect(response.status).to.be.equal(200)
        console.log(response.data.age)
        expect(response.data.age).not.to.be.equal(29)
        expect(response.data).to.be.an("object")
    })
});
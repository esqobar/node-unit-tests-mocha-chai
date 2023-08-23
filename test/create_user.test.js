const expect = require('chai').expect
let chai = require('chai')
const { before } = require('mocha')
const axios = require("axios");
const {API_URL, createUser} = require("./utils.test");
let should = chai.should()

describe('Create User Information', function () {
    it("Create A User", async () => {
        const payload = {
            name: "Collins Juma",
            email: "collins@gmail.com",
            age: 25,
        }
        const response = await axios.post(API_URL + '/user', payload)
        expect(response.status).to.be.equal(201)
        expect(response.data).to.be.an("object")
    })
    it("Create A User without adding name", async () => {
       try{
           const payload = {
               email: "collins@gmail.com",
               age: 25,
           }
           const response = await axios.post(API_URL + '/user', payload)
           expect(response.status).to.be.equal(201)
           expect(response.data).to.be.an("object")
       } catch (error) {
           if(error.response){
               expect(error.response.status).not.to.be.equal(201)
           } else {
               throw error
           }
       }
    })
    it("Create A User without adding email", async () => {
       try{
           const payload = {
               name: "Collins Juma",
               age: 25,
           }
           const response = await axios.post(API_URL + '/user', payload)
           expect(response.status).to.be.equal(201)
           expect(response.data).to.be.an("object")
       } catch (error) {
           if(error.response){
               expect(error.response.status).not.to.be.equal(201)
           } else {
               throw error
           }
       }
    })
    it("Create A User without adding age", async () => {
       try{
           const payload = {
               name: "Collins Juma",
               email: "collins@gmail.com"
           }
           const response = await axios.post(API_URL + '/user', payload)
           expect(response.status).to.be.equal(201)
           expect(response.data).to.be.an("object")
       } catch (error) {
           if(error.response){
               expect(error.response.status).not.to.be.equal(201)
           } else {
               throw error
           }
       }
    })
})
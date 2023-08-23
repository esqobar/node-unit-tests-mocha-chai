const axios = require("axios");
const API_URL = 'http://localhost:8888/api'

const createUser = async () => {
    const payload = {
        name: "Test Juma",
        email: "test@gmail.com",
        age: 25,
    }
    const response = await axios.post(API_URL + '/user', payload)
    return response.data
}

module.exports = {API_URL, createUser}
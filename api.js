const axios = require('axios')
require('dotenv').config()

const baseURL = process.env.DB_URL
const auth = process.env.DB_PASS

// List
const list = async(key) => {
    const content = await axios.get(baseURL + key + '.json?auth='+auth)
    if(content.data) {
        const objetos = Object
            .keys(content.data)
            .map(key => {
                return {
                    id: key,
                    ...content.data[key]
                }
            })
        return objetos
    }
    return []
}
// Delete
const apagar = async(key, id) => {
    await axios.delete(baseURL + key + '/' + id + '.json?auth='+auth)
    return true
}
// Edit
const get = async(key, id) => {
    const content = await axios.get(`${baseURL}/${key}/${id}.json?auth=`+auth)
    return {
        id: id,
        ...content.data
    }
}
// Update
const update = async(key, id, data) => {
    await axios.put(`${baseURL}/${key}/${id}.json?auth=`+auth, data)
    return true
}
// Create
const create = async(key, data) => {
    await axios.post(`${baseURL}/${key}.json?auth=`+auth, data)
    return true
}

module.exports = {
    list, apagar, get, update, create
}
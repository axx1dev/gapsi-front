import axios from 'axios';
const baseUrl = 'http://localhost:9000'

const getSuppliers = (path) => {
    return axios.get(baseUrl+path).then(response => response.data)
}

export default getSuppliers
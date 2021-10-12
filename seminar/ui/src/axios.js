import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:9000/',
    headers: {
        'content-type': 'application/json',
    }
})

import axios from "axios";
import queryString from "queryString";


const axiosClient = axios.create({
    baseURL : "http://localhost:9000/",
    headers : {
        'content-type': 'application/json',
    },
    paramsSerializer: param => queryString.stringify(param),
});

axiosClient.interceptors.response.use((response) => {
    if(response && response.data)
        { return response.data;}
        return response;  
    },
    (err) =>{
        throw err;
    }
)

export default axiosClient;
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
axios.interceptors.response.use((response) =>{
    return response;
}, (error) => {console.log(error);
return Promise.reject(error);
})

const http = {
    get:axios.get,
    put:axios.put,
    delete:axios.delete,
    post:axios.post
};

export default http;
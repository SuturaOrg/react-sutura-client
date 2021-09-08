const apiUrl= process.env.ENV_NODE==="production"?'https://suturaapi.herokuapp.com/api':"http://localhost:8082/api";
export default {
    apiUrl
}

const apiUrl= process.env.NODE_ENV==="production"?'https://sutura-api.herokuapp.com/api':"http://localhost:8082/api";
export default {
    apiUrl
}

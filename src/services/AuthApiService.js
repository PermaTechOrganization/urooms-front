import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/api/v1/Urooms",
});

export class AuthApiService {


    register(data){
        return http.post('/account', data)
    }

    findByEmail(Email){
        return http.get(`/account?email=${Email}`);
    }
}
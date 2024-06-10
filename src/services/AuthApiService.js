import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/api/v1/Urooms",
});

export class AuthApiService {
    findByEmail(Email){
        return http.get(`/account?email=${Email}`);
    }
}
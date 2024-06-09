import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/api/v1/Urooms",
});

export class CareerApiService {
    getall(){
        return http.get('/career')
    }
    getCareerById(id){
        return http.get(`/career/${id}`)
    }
}
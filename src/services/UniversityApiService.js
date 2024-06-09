import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/api/v1/Urooms",
});

export class UniversityApiService {
    getall(){
        return http.get('/university')
    }
    findUniversityById(id){
        return http.get(`/university/${id}`)
    }
}
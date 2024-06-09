import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/api/v1/Urooms",
});

export class StudentApiService {
    addStudent(data){
        return http.post('/student', data)
    }
}
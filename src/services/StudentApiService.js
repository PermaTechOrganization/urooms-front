import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/api/v1/Urooms",
});

export class StudentApiService {
    addStudent(data){
        return http.post('/student', data)
    }
    getall(){
        return http.get('/student')
    }

    async countStudents() {
        try {
            const response = await this.getall();
            return response.data.length;
        } catch (error) {
            console.error('Error al obtener el número de estudiantes:', error);
            throw error;
        }
    }
}
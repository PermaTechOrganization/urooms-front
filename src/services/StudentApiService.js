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

    getStudentById(id){
        return http.get(`/student/${id}`)
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

    getStudentByAccountId(accountId) {
        return http.get('/student')
            .then(response => {
                return response.data.find(student => student.account.id === accountId);
            })
            .catch(error => {
                console.error('Error al obtener el estudiante:', error);
                throw error;
            });
    }
}
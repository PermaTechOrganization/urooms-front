import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/api/v1/Urooms",
});

export class LessorApiService {
    addLessor(data){
        return http.post('/lessor', data)
    }
    getall(){
        return http.get('/lessor')
    }
    getLessorById(id){
        return http.get(`/lessor/${id}`)
    }

    async countLessors() {
        try {
            const response = await this.getall();
            return response.data.length;
        } catch (error) {
            console.error('Error al obtener el número de arrendadores:', error);
            throw error;
        }
    }

    getLessorByAccountId(accountId) {
        return http.get('/lessor')
            .then(response => {
                return response.data.find(lessor => lessor.account.id === accountId);
            })
            .catch(error => {
                console.error('Error al obtener el arrendador:', error);
                throw error;
            });
    }
}
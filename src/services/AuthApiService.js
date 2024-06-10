import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/api/v1/Urooms",
});

export class AuthApiService {
    register(data){
        return http.post('/account', data)
    }

    getbyId(id){
        return http.get(`/account/${id}`);
    }

    getall(){
        return http.get('/account')
    }

    updatebyId(id, data){
        return http.put(`/account/${id}`, data)
    }

    findByEmail(Email){
        return http.get(`/account?email=${Email}`);
    }

    async countAccounts() {
        try {
            const response = await this.getall();
            return response.data.length;
        } catch (error) {
            console.error('Error al obtener el número de cuentas:', error);
            throw error;
        }
    }
}
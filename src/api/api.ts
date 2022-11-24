import axios from 'axios'

export const apiClient = axios.create({
    baseURL:''
});

export const service = {
    getToys(){
        return apiClient.get(``)
    }
}
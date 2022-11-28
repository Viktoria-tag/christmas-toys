import axios from 'axios'
import { Toy } from 'typings/global';

export const apiClient = axios.create({
    baseURL:'https://raw.githubusercontent.com/Viktoria-tag/christmas-toys/main/src/assets/data/data.json'
});

export const service = {
    getToys(){
        return apiClient.get<Toy[]>(``)
    }
}
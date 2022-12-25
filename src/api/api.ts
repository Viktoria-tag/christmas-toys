import axios from 'axios'
import { Toy } from 'typings/global';

const GET_TOYS_URL ='/master/src/assets/data/data.json'

export const apiClient = axios.create({
    baseURL:'https://raw.githubusercontent.com/Viktoria-tag/christmas-toys'
});

export const service = {
    getToys(){
        return apiClient.get<Toy[]>(GET_TOYS_URL)
    }
}
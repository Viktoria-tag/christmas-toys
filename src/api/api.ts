import axios from 'axios'

export const apiClient = axios.create({
    baseURL:'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/data.js'
});

export const service = {
    getToys(){
        return apiClient.get(``)
    }
}
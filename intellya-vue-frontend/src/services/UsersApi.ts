import { axiosInstance } from './axios'

export default { 
    getUsers() { 
        return axiosInstance.get('/users')
    }, 
    getUser(id: string) { 
        return axiosInstance.get(`/users/${id}`)
    }
}
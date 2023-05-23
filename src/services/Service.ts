import axios from 'axios'
import UserLogin from '../models/UserLogin'

export const api = axios.create({
  baseURL: 'https://blogpessoal-2vbd.onrender.com'  
})

export const login = async(url : string, dados: UserLogin, setDado: Function) => {
    const response = await api.post(url, dados)
    setDado(response.data)
}
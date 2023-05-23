import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://blogpessoal-2vbd.onrender.com'  
})

export const login = async(url, dados, setDado) => {
    const response = await api.post(url, dados)
    setDado(response.data)
}
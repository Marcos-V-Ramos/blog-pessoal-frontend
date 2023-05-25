import axios from 'axios'
import UserLogin from '../models/UserLogin'
import User from '../models/User'

export const api = axios.create({
  baseURL: 'https://blogpessoal-2vbd.onrender.com'  
})

export const login = async (url : string, dados: UserLogin, setDado: Function) => {
    const response = await api.post(url, dados)
    setDado(response.data.token)
}

export const cadastroUsuario = async (url: string, dados: User, setDado: Function) => {
    const response = await api.post(url, dados)
    setDado(response.data)
}

export const busca = async (url: string, setDado: Function, header: Object) => {
  const response = await api.get(url, header);
  setDado(response.data)
}

export const buscarPorId = async (url: string, setDado: Function, header: Object) => {
  const response = await api.get(url, header)
  setDado(response.data)
  return response.status
}

export const post = async (url: string, setDado: Function, header: Object, dados: any) => {
  const response = await api.post(url, dados, header)
  setDado(response.data)
  return response.status
}

export const put = async (url: string, setDado: Function, header: Object, dados: any) => {
  const response = await api.put(url, dados, header)
  setDado(response.data)
  return response.status
}

export const removerPorId = async (url: string, header: Object) => {
  const response = await api.delete(url, header)
  return [response.status, response.statusText]
}

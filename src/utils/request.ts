import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'

type Response = ReturnType<typeof axioser.post>

export const baseURL: string = import.meta.env.VITE_REQUEST_BASE_URI

export const axioser = axios.create({
  baseURL: baseURL
})

export function namedAxios(name: string): AxiosInstance
export function namedAxios(name: string, errorHandler: Promise<string>): AxiosInstance
export function namedAxios(name: string, errorHandler?: Promise<string>): AxiosInstance {
  if (!name) {
    throw new Error('需要传入一个有效的命名')
  }
  const instanceAxios = axios.create({
    baseURL: baseURL + name
  })
  instanceAxios.interceptors.response.use(
    (res) => res,
    () => Promise.reject(errorHandler ?? ElMessage.error('出错了'))
  )
  return instanceAxios
}

export function post<T = any>(url: string, param: T): Response {
  return axioser.post(url, param)
}

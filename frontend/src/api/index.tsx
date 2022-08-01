import axios from 'axios';
import { DataType } from '../common/types';
import urls from './urls';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const axiosInstance = axios.create({ baseURL });
type RequestMethod = 'get' | 'post' | 'patch' | 'delete' | 'put';
const makeRequest = (method: RequestMethod, url: string, ...params: any) =>
  axiosInstance[method](`${url}`, ...params);

const request =
  (method: RequestMethod, url: string) =>
  (...params: any) => {
    return makeRequest(method, url, ...params);
  };
export const  getTodosAPI = async() => {
    const response= await request('get', baseURL + urls.getTodos)();
    return response.data;
}

export const  updateOneTodo = async(id: number, data: Partial<DataType>) => {
  const response= await request('patch', baseURL + urls.getTodos + '/' + id)(data);
  return response.data;
}

export const  createNewTodoAPI = async(data: Partial<DataType>) => {
  const response= await request('post', baseURL + urls.getTodos)(data);
  return response.data;
}

export const  deleteOneTodo = async(id: number) => {
  const response= await request('delete', baseURL + urls.getTodos + '/' + id)();
  return response.data;
}


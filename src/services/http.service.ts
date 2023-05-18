import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

interface IHttpService {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  delete: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
}

const instance: AxiosInstance = axios.create({
  baseURL: 'http://109.172.138.228:84/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(function (config) {
  const userObject = localStorage.getItem('user');
  let access_token = "";
  if (userObject && JSON.parse(userObject)) {
    access_token = JSON.parse(userObject).token;
  }
  if (access_token.length > 0) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

instance.interceptors.response.use(function (response) {
  // if (response.data.code === 'user/signed_in') {
  //   const access_token = response.data.tokenData.token;
  //   const uid = response.data.tokenData.uid;

  //   localStorage.setItem('access_token', access_token);
  //   localStorage.setItem('uid', uid);
  // }

  return response;
}, (error) => {
  return error.response
})

const httpService: IHttpService = {
  get: async <T = any>(url: string, config?: AxiosRequestConfig) => await instance.get<T>(url, config),
  post: async <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => await instance.post<T>(url, data, config),
  put: async <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => await instance.put<T>(url, data, config),
  delete: async <T = any>(url: string, config?: AxiosRequestConfig) => await instance.delete<T>(url, config)
}

export default httpService

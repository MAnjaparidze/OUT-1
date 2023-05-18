import httpService from './http.service'
import { type AxiosResponse } from 'axios'
import { type IAuth } from '../interfaces/auth.interface'

interface IAuthService {
  checkToken: () => Promise<AxiosResponse>;
  loginUser: (userName: string, password: string) => Promise<AxiosResponse<IAuth>>;
}

const authService: IAuthService = {
  async checkToken() {
    return await httpService.get('api/Auth/check-token');
  },
  async loginUser(userName, password) {
    const params = {
      userName,
      password
    }

    return await httpService.post('/api/Auth/login', params)
  }
}

export default authService

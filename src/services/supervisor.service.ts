import httpService from './http.service'
import { type AxiosResponse } from 'axios'
import { IMerchantProps, IRoleProps, IUserProps } from '../interfaces/supervisor.interface'

interface ISupervisorServiceProps {
  getUsers: () => Promise<AxiosResponse<IUserProps[]>>,
  getRoles: () => Promise<AxiosResponse<IRoleProps[]>>,
  getMerchants: () => Promise<AxiosResponse<IMerchantProps[]>>,
  addUser: (userObj: IUserProps) => Promise<AxiosResponse<any>>,
}

const supervisorService: ISupervisorServiceProps = {
  async getUsers() {
    return await httpService.get('/api/User/GetUsers')
  },
  async getRoles() {
    return await httpService.get('/api/User/GetRoles')
  },
  async getMerchants() {
    return await httpService.get('/api/User/GetMerchants')
  },
  async addUser(userObj: IUserProps) {
    const params = {
      ...userObj
    };

    return await httpService.post('/api/User/AddUser', params);
  }
}

export default supervisorService

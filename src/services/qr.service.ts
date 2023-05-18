import httpService from './http.service'
import { type AxiosResponse } from 'axios'
import { type IAuth } from '../interfaces/auth.interface'

interface IQRService {
  generateQR: (amount: string, posId: string) => Promise<AxiosResponse<any>>
  getStatus: (paymentID: any) => Promise<AxiosResponse<any>>
  getPayments: () => Promise<AxiosResponse<any>>
}

const qrService: IQRService = {
  async generateQR(amount, posId) {
    const params = {
      amount,
      posId
    }
    return await httpService.post('/api/QRPayment/generate', params)
  },
  async getStatus(paymentID) {
    return await httpService.get(`/api/QRPayment/get-status?PaymentId=${paymentID}`);
  },
  async getPayments() {
    return await httpService.get('/api/QRpayment/get-payments')
  }
}

export default qrService

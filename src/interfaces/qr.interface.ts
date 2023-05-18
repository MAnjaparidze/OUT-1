interface IGenerate {
  token: string,
  userRole: string
}

interface ISale {
  id: number,
  date: string,
  amount: number,
  paymentGuid: string,
  posId: string
}

interface IQRData {
  POSId: string
  Amount: string
  Merchant: string,
  Guid: string
}


export type {
  IGenerate,
  ISale,
  IQRData
}

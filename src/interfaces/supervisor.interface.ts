interface IUserProps {
  userName: string,
  roleId: number,
  merchantsId: string[],
  personalId: string,
  email: string,
  mobile: string,
  password: string,
  isActive: boolean
};

interface IMerchantProps {
  id: string,
  description: string
};

interface IRoleProps {
  id: number,
  description: string
};

export type {
  IUserProps,
  IMerchantProps,
  IRoleProps
}
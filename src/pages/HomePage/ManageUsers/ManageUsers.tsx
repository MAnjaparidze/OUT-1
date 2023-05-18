import { useState, useEffect } from 'react'
import { IMerchantProps, IRoleProps, IUserProps } from '../../../interfaces/supervisor.interface'
import supervisorService from '../../../services/supervisor.service';
import PlusSVG from '../../../assets/svgs/general/PlusSVG';
import EditSVG from '../../../assets/svgs/general/EditSVG';

type Props = {}

const dummyData: IUserProps[] = [
  {
    userName: 'david.smith',
    roleId: 1,
    merchantsId: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
    personalId: '3fa85f64-5717-4562-b3fc-2c963f66af87',
    email: 'david.smith@gmail.com',
    mobile: '551207654',
    password: '076543076543030100',
    isActive: true
  },
  {
    userName: 'sarah.johnson',
    roleId: 2,
    merchantsId: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
    personalId: '3fa85f64-5717-4562-b3fc-2c963f66af8c',
    email: 'sarah.johnson@gmail.com',
    mobile: '551203210',
    password: '032103210701030100',
    isActive: true
  },
  {
    userName: 'michael.brown',
    roleId: 2,
    merchantsId: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
    personalId: '3fa85f64-5717-4562-b3fc-2c963f66af8f',
    email: 'michael.brown@gmail.com',
    mobile: '551206789',
    password: '067896789301030100',
    isActive: true
  },
  {
    userName: 'jennifer.davis',
    roleId: 1,
    merchantsId: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
    personalId: '3fa85f64-5717-4562-b3fc-2c963f66af93',
    email: 'jennifer.davis@gmail.com',
    mobile: '551205432',
    password: '054325432401030100',
    isActive: true
  },
  {
    userName: 'kevin.jones',
    roleId: 2,
    merchantsId: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
    personalId: '3fa85f64-5717-4562-b3fc-2c963f66af97',
    email: 'kevin.jones@gmail.com',
    mobile: '551208765',
    password: '087656789401030100',
    isActive: true
  },
  {
    userName: 'amanda.miller',
    roleId: 1,
    merchantsId: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
    personalId: '3fa85f64-5717-4562-b3fc-2c963f66af9a',
    email: 'amanda.miller@gmail.com',
    mobile: '551201234',
    password: '012342134501030100',
    isActive: true
  },
  {
    userName: 'emily.thompson',
    roleId: 1,
    merchantsId: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
    personalId: '3fa85f64-5717-4562-b3fc-2c963f66afa0',
    email: 'emily.thompson@gmail.com',
    mobile: '551206543',
    password: '065436543501030100',
    isActive: true
  },
  {
    userName: 'william.baker',
    roleId: 2,
    merchantsId: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
    personalId: '3fa85f64-5717-4562-b3fc-2c963f66afa3',
    email: 'william.baker@gmail.com',
    mobile: '551204321',
    password: '043214321601030100',
    isActive: true
  },
  {
    userName: 'olivia.white',
    roleId: 1,
    merchantsId: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
    personalId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    email: 'olivia.white@gmail.com',
    mobile: '551209876',
    password: '098769876901030100',
    isActive: true
  }
]

const ManageTransactions = (props: Props) => {
  const [userArr, setUserArr] = useState<IUserProps[]>([]);
  const [merchantArr, setMerchantArr] = useState<IMerchantProps[]>([]);
  const [rolesArr, setRolesArr] = useState<IRoleProps[]>([]);

  const [modalOpen, toggleModalOpen] = useState<Boolean>(false);
  // TODO: Create Context for this DATA

  useEffect(() => {
    handleGetMerchants();
    handleGetRoles();
  }, []);

  useEffect(() => {
    if (merchantArr.length > 0 && rolesArr.length > 0) {
      handleGetUsers();
    }
  }, [merchantArr, rolesArr])

  const handleGetUsers = async () => {
    const response = await supervisorService.getUsers();
    // setUserArr(response.data);
    setUserArr(dummyData);
  }

  const handleGetMerchants = async () => {
    const response = await supervisorService.getMerchants();
    setMerchantArr(response.data)
  }

  const handleGetRoles = async () => {
    const response = await supervisorService.getRoles();
    setRolesArr(response.data);
  }

  const handleReturnRole = (roleID: number) => {
    console.log(roleID)
    return rolesArr.filter(role => role.id === roleID)[0].description;
  }

  return (
    <div className='flex flex-grow flex-col pt-20 px-10'>
      <button className='flex justify-center items-center py-4 pl-6 pr-14 relative rounded-full shadow-md self-end h-14'>
        <span className='font-bold text-sm'>მომხმარებლის დამატება</span>
        <PlusSVG className='absolute right-2' />
      </button>

      <div className='flex flex-col mt-10'>
        <div className='flex flex-row justify-center text-center font-bold'>
          <div className='w-1/5'>მომხმარებელი</div>
          <div className='w-1/5'>როლი</div>
          <div className='w-1/5'>მობილური</div>
          <div className='w-1/5'>აქტიური</div>
          <div className='w-1/5'>რედაქტირება</div>
        </div>

        <div className='flex flex-col w-full mt-3 overflow-y-auto max-h-[600px]'>
          {
            userArr.map((userItem: IUserProps, index) => {
              // let date = sale.date.split('T');
              return (
                <div key={index} className='flex flex-row justify-center text-center w-full mt-6'>
                  <div className={`flex flex-row w-5/6 rounded-full py-10 ${index % 2 === 0 ? 'bg-extra-light-gray' : 'bg-extra-light-gray/50'} font-bold`}>
                    <div className='w-1/4'>{userItem.userName}</div>
                    <div className='w-1/4'>{handleReturnRole(userItem.roleId)}</div>
                    <div className='w-1/4'>{userItem.mobile}</div>
                    <div className='w-1/4'>{userItem.isActive ? 'კი' : 'არა'}</div>
                  </div>
                  <div className='w-1/5'>
                    <div className='flex justify-center items-center bg-extra-light-gray w-3/5 mx-auto h-full rounded-full cursor-pointer'>
                      <EditSVG />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ManageTransactions
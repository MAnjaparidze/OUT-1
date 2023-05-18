import NavItem from './NavItem'
import { useAuth } from '../../contexts/AuthProvider'

import ManageUsersSVG from '../../assets/svgs/sidebar/ManageUsersSVG'
import ManageReportingSVG from '../../assets/svgs/sidebar/ManageReportingSVG'
import ManageTransactionsSVG from '../../assets/svgs/sidebar/ManageTransactionsSVG'
import AddPointsSVG from '../../assets/svgs/sidebar/AddPointsSVG'
import SalesSVG from '../../assets/svgs/sidebar/SalesSVG'
import ReceivePaymentSVG from '../../assets/svgs/sidebar/ReceivePaymentSVG'

// interface ILogoPosProps {
//   burgerPos: ILogoPos,
//   paymentPos: ILogoPos,
//   addPointsPos: ILogoPos,
//   salesPos: ILogoPos
// }

// interface ILogoPos {
//   leftPos: number,
//   topPos: number
// }

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  // const [isOpen, toggleIsOpen] = useState(true)
  // const [wrapperOpen, toggleWrapperOpen] = useState(true)
  // const [navAnimation, toggleNavAnimation] = useState(true)
  // const [logosPos, setLogosPos] = useState<ILogoPosProps | null>(null)

  // useEffect(() => {
  //   handleGetPositions()
  // }, [])

  // const handleToggleOpen = () => {
  //   // TODO: Might be usefull later
  //   return;
  //   // if (!isOpen) {
  //   //   toggleIsOpen(true)
  //   //   toggleWrapperOpen(true)
  //   //   setTimeout(() => {
  //   //     toggleNavAnimation(true)
  //   //   }, 300)
  //   // } else {
  //   //   toggleWrapperOpen(false)
  //   //   toggleNavAnimation(false)
  //   //   setTimeout(() => {
  //   //     toggleIsOpen(false)
  //   //   }, 300)
  //   // }
  // }


  // const handleGetPositions = () => {
  //   const burgerMenu = document.getElementById("burger-menu")
  //   const paymentLogo = document.getElementById("payment-logo")
  //   const addPointsLogo = document.getElementById("addPoints-logo")
  //   const salesLogo = document.getElementById("sales-logo")

  //   const burgerPos = getLeftPos(burgerMenu)
  //   const paymentPos = getLeftPos(paymentLogo)
  //   const addPointsPos = getLeftPos(addPointsLogo)
  //   const salesPos = getLeftPos(salesLogo)

  //   setLogosPos({
  //     burgerPos,
  //     paymentPos,
  //     addPointsPos,
  //     salesPos
  //   })
  // }

  // const getLeftPos = (el: HTMLElement | null): ILogoPos => {
  //   if (!el) return { leftPos: 0, topPos: 0 }
  //   const rect = el.getBoundingClientRect()
  //   const leftPos = rect ? rect.left + window.scrollX - 2 : window.scrollX - 2
  //   const topPos = rect ? rect.top + window.scrollY : window.scrollY

  //   return {
  //     leftPos,
  //     topPos
  //   }
  // }

  const cashierNavItems = [
    {
      linkTo: '/home/receive_payment',
      tabName: 'გადახდის მიღება',
      navItemSVG: (isActive: boolean) => (
        <ReceivePaymentSVG id='payment-logo' className='z-10' color={`${isActive ? '#B2F8D6' : '#f4f4f4'}`} />
      )
    },
    {
      linkTo: '/home/add_points',
      tabName: 'ქულების დარიცხვა',
      navItemSVG: (isActive: boolean) => (
        <AddPointsSVG id='addPoints-logo' className='z-10' color={`${isActive ? '#B2F8D6' : '#f4f4f4'}`} />
      )
    },
    {
      linkTo: '/home/sales',
      tabName: 'გაყიდვები',
      navItemSVG: (isActive: boolean) => (
        <SalesSVG id='sales-logo' className='z-10' color={`${isActive ? '#B2F8D6' : '#f4f4f4'}`} />
      )
    },
  ];

  const supervisorNavItems = [
    {
      linkTo: '/home/manage_transactions',
      tabName: 'გადახდების კონტროლი',
      navItemSVG: (isActive: boolean) => (
        <ManageTransactionsSVG id='manage-transactions-logo' className='z-10' color={`${isActive ? '#B2F8D6' : '#f4f4f4'}`} />
      )
    },
    {
      linkTo: '/home/manage_users',
      tabName: 'მომხმარებლების მართვა',
      navItemSVG: (isActive: boolean) => (
        <ManageUsersSVG id='manage-users-logo' className='z-10' color={`${isActive ? '#B2F8D6' : '#f4f4f4'}`} />
      )
    },
    {
      linkTo: '/home/manage_reports',
      tabName: 'რეპორტინგი',
      navItemSVG: (isActive: boolean) => (
        <ManageReportingSVG id='manage-reports-logo' className='z-10' color={`${isActive ? '#B2F8D6' : '#f4f4f4'}`} />
      )
    },
  ];

  return (
    <div className='flex flex-col w-full md:w-80 transition-all duration-300 h-[calc(100vh-70px)] bg-transparent'>
      {/* <div onClick={handleToggleOpen} className={`flex items-center px-4 h-[76px] md:bg-light-green relative md:rounded-tr-[30px] cursor-pointer`}>
        <BurgerMenuSVG className={`absolute left-4 transition-all duration-300 ${wrapperOpen ? 'opacity-0' : 'opacity-100'}`} id='burger-menu' />
        <LogoSVG className={`absolute left-4 transition-all duration-300 ${wrapperOpen ? 'opacity-100' : 'opacity-0'}`} />
      </div> */}
      <div className='flex flex-col flex-grow md:shadow-lg bg-white gap-4 pt-6 px-4'>

        {(user?.userRole === 'Cashier' ? cashierNavItems : supervisorNavItems).map(item => <NavItem key={item.linkTo} item={item} />)}

        {/* <NavLink to='/home/receive_payment' className={`flex items-center relative h-[60px] cursor-pointer`}>
          {
            ({ isActive }) => (
              <>
                <ReceivePaymentSVG id='payment-logo' className='z-10' color={`${isActive ? '#B2F8D6' : '#f4f4f4'}`} />

                <div className={`flex items-center justify-center w-16 h-[60px] rounded-full ${isOpen ? `${isActive ? 'bg-light-green' : 'bg-light-gray'}` : 'bg-transparent'} transition-custom duration-300 absolute ${wrapperOpen ? 'px-4 left-[68px] w-48' : 'left-0'}`}>
                  {navAnimation && <span className='color-dark-green font-bold '>
                    გადახდის მიღება
                  </span>}
                </div>
              </>
            )
          }
        </NavLink> */}
        {/* <NavLink to='/home/add_points' className={`flex items-center relative h-[60px] cursor-pointer`}>
          {
            ({ isActive }) => (
              <>
                <AddPointsSVG id='addPoints-logo' className='z-10' color={`${isActive ? '#B2F8D6' : '#f4f4f4'}`} />

                <div className={`flex items-center justify-center w-16 h-[60px] rounded-full ${isOpen ? `${isActive ? 'bg-light-green' : 'bg-light-gray'}` : 'bg-transparent'} transition-custom duration-300 absolute ${wrapperOpen ? 'px-4 left-[68px] w-48' : 'left-0'}`}>
                  {navAnimation && <span className='color-main-black font-bold '>
                    ქულების დარიცხვა
                  </span>}
                </div>
              </>
            )
          }
        </NavLink> */}
        {/* <NavLink to='sales' className={`flex items-center relative h-[60px] cursor-pointer`}>
          {
            ({ isActive }) => (
              <>
                <SalesSVG id='sales-logo' className='z-10' color={`${isActive ? '#B2F8D6' : '#f4f4f4'}`} />

                <div className={`flex items-center justify-center w-16 h-[60px] rounded-full ${isOpen ? `${isActive ? 'bg-light-green' : 'bg-light-gray'}` : 'bg-transparent'} transition-custom duration-300 absolute ${wrapperOpen ? 'px-4 left-[68px] w-48' : 'left-0'}`}>
                  {navAnimation && <span className='color-main-black font-bold '>
                    გაყიდვები
                  </span>}
                </div>
              </>
            )
          }
        </NavLink> */}
      </div>
    </div >
  )
}

export default Sidebar

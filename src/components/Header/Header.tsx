import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthProvider'

import WisherLogo from '../../assets/imgs/LogoSVG'
import WisherTextLogo from '../../assets/imgs/LogoTextSVG'

import ArrowDownSVG from '../../assets/icons/general/ArrowDownSVG'

const Header: React.FC = () => {
  const { user, logout } = useAuth()
  const [menuOpen, toggleMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    toggleMenuOpen(!menuOpen)
  }

  const handleLogout = () => {
    handleToggleMenu()
    logout()
  }

  return (
    <div className={`${user ? 'grid grid-rows-1 grid-cols-3 md:justify-end' : 'justify-start'} relative md:flex flex-row items-center md:h-[76px] w-full px-2 md:px-32 py-2 ${user ? 'bg-main-green' : 'bg-white'}`}>
      {!user
        ?
        <div className='flex flex-row items-center h-full w-fit z-20 col-start-2 col-span-1'>
          <WisherLogo />
          <WisherTextLogo className='ml-2' color={user ? '#fff' : '#181818'} />
        </div>
        :
        <div className={`flex items-center md:w-80 px-4 h-[76px] absolute left-0 md:bg-light-green md:rounded-tr-[30px] cursor-pointer`}>
          <WisherLogo className={`transition-all duration-300 opacity-100`} />
          <WisherTextLogo className='ml-8' color={user ? '#fff' : '#181818'} />
        </div>
      }

      {user &&
        <div className='flex flex-row items-center justify-self-end col-start-3 col-span-1 relative'>
          <button className='flex flex-row items-center' onClick={handleToggleMenu}>
            <span className='hidden md:inline-block mr-2 text-dark-green text-base'>მარიამ08</span>
            <div className='flex justify-center items-center w-[54px] h-[54px] rounded-full bg-light-green mr-2'>
              <span className='text-dark-green font-bold'>მ</span>
            </div>
            <ArrowDownSVG />
          </button>

          {menuOpen &&
            <div className={`flex flex-col z-30 absolute w-full top-full right-0 mt-2 origin-bottom-right py-1 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} `}>
              <button className='hover:bg-light-gray duration-300 px-2 py-1'>
                პროფილი
              </button>
              <button className='hover:bg-light-gray duration-300 px-2 py-1' onClick={handleLogout}>
                გასვლა
              </button>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Header

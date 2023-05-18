import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

// interface Props {}

const HomePage: React.FC = () => {
  return (
    <div className='flex flex-row relative'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default HomePage

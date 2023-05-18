import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthProvider'
import { useGeneral } from '../../contexts/GeneralProvider'
import authService from '../../services/auth.service'

import ShowPassSVG from '../../assets/svgs/inputs/ShowPassSVG'
import UsernameSVG from '../../assets/svgs/inputs/UsernameSVG'

interface LoginFormValues {
  userName: string
  password: string
}

const Login: React.FC = () => {
  const { login } = useAuth()
  const { loading, toggleLoading, setAlertData } = useGeneral()
  const [formValues, setFormValues] = useState<LoginFormValues>({
    userName: '',
    password: ''
  })
  const [showPass, toggleShowPass] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    toggleLoading(true);
    const response = await authService.loginUser(formValues.userName, formValues.password)

    switch(response.status) {
      case 200:
        login(response.data)
        setAlertData({type: 0, details: 'მონაცემები დადასტურებულია'})
        break;
      case 401:
        setAlertData({type: 1, details: 'არასწორი მომხმარებელი ან პაროლი'})
        break;
      default:
        break;
    }
    toggleLoading(false);
  }

  return (
    <div className='flex flex-grow justify-center items-center bg-light-gray'>

      <form data-testid='login-form' onSubmit={(event) => { void onSubmit(event) }} className='flex flex-col justify-center py-16 px-20 bg-white rounded-[45px] md:min-w-[650px]'>
        <h1 className='text-xl text-center font-bold text-main-black mb-12'>ავტორიზაცია</h1>
        <div className='flex flex-row w-full items-center pl-10 pr-2 py-2 rounded-full border-main-gray border-2 mb-[15px]'>
          <input
            type='text'
            name='userName'
            placeholder='მომხმარებელი'
            value={formValues.userName}
            onChange={handleInputChange}
            className='grow bg-transparent outline-none text-base bg-none'
          />
          <UsernameSVG />
        </div>
        <div className='flex flex-row w-full items-center pl-10 pr-2 py-2 rounded-full border-main-gray border-2 mt-[15px]'>
          <input
            type={showPass ? 'text' : 'password'}
            name='password'
            placeholder='პაროლი'
            value={formValues.password}
            onChange={handleInputChange}
            className='grow bg-transparent outline-none text-base'
          />
          <ShowPassSVG className='hover:cursor-pointer' onClick={() => toggleShowPass(!showPass)} />
        </div>
        <button data-testid='submit-button' type='submit' className={`${loading ? 'bg-main-green/50' : 'bg-main-green'} font-bold text-white text-center w-full px-10 py-6 rounded-full mt-[50px]`}>
          შესვლა
        </button>

        <Link to={'#'} className='text-main-blue text-center mt-8'>პაროლის აღდგენა</Link>
      </form>
    </div>
  )
}

export default Login

import { createContext, useContext, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import authService from '../services/auth.service'
import qrService from '../services/qr.service'
import { IAuth } from '../interfaces/auth.interface';

interface IAuthProviderProps {
  children: React.ReactNode
}

interface IAuthInitialData {
  login: (data: any) => void
  logout: () => void
  user: {
    username: string
    avatar: string
    token: string
    userRole: string
  }
}

const initialAuthData: IAuthInitialData = {
  login: () => { },
  logout: () => { },
  user: {
    username: '',
    avatar: '',
    token: '',
    userRole: ''
  }
}

const AuthContext = createContext(initialAuthData)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useLocalStorage('user', null)

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    if (user) {
      let userRole = user.userRole;
      switch (userRole) {
        case 'Cashier':
          navigate('/home/receive_payment');
          break;
        case 'Supervisor':
          navigate('/home/manage_transactions');
          break;
        default:
          navigate('/login');
          break;
      };
    }
  }, [user]);

  const login = async (data: IAuth) => {
    setUser(data)
  }

  const logout = () => {
    setUser(null)
    navigate('/login', { replace: true })
  }

  const checkUser = async () => {
    if (!user) {
      navigate('/login')
      return;
    }

    let response = await authService.checkToken();

    if (response.status === 401) {
      logout()
    } else {
      navigate(user.userRole === 'Cashier' ? '/home/receive_payment' : '/home/manage_transactions')
    }
  }

  const value = useMemo(
    () => ({
      login,
      logout,
      user
    }),
    [user]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

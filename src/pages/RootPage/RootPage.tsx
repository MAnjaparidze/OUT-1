import { Outlet } from 'react-router-dom'
import Alert from '../../components/Alert';
import Header from '../../components/Header'
import { AuthProvider } from '../../contexts/AuthProvider';
import { useGeneral } from '../../contexts/GeneralProvider';

const RootPage: React.FC = () => {
  const { alertData } = useGeneral()

  return (
    <div className='flex flex-col w-screen h-screen'>
      <AuthProvider>
        <Header />
        <Outlet />
        {alertData && <Alert type={alertData.type} details={alertData.details} />}
      </AuthProvider>
    </div>
  )
}

export default RootPage

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IGeneralProviderProps {
  children: React.ReactNode
}

interface IAlertDataProps {
  type: number
  details: string
}

interface IGeneralInitialData {
  loading: boolean
  alertData: any
  setAlertData: React.Dispatch<React.SetStateAction<IAlertDataProps | null>>
  toggleLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const initialGeneralData: IGeneralInitialData = {
  loading: false,
  alertData: null,
  setAlertData: () => { },
  toggleLoading: () => { }
}

const GeneralContext = createContext(initialGeneralData)

export const GeneralProvider = ({ children }: IGeneralProviderProps) => {
  const [loading, toggleLoading] = useState(false);
  const [alertData, setAlertData] = useState<IAlertDataProps | null>(null);

  useEffect(() => {
    if (alertData) {
      setTimeout(() => {
        setAlertData(null);
      }, 3000);
    }
  }, [alertData]);

  const value = useMemo(
    () => ({
      loading,
      alertData,
      setAlertData,
      toggleLoading
    }),
    [loading, alertData]
  )

  return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
}

export const useGeneral = () => {
  return useContext(GeneralContext)
}

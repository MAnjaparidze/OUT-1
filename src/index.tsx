import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import reportWebVitals from './reportWebVitals'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GeneralProvider } from './contexts/GeneralProvider'

import ErrorPage from './pages/ErrorPage'
import Login from './pages/AuthPage'
import RootPage from './pages/RootPage'
import HomePage from './pages/HomePage'
import ReceivePaymentPage from './pages/HomePage/ReceivePaymentPage'
import SalesPage from './pages/HomePage/SalesPage'
import AddPointsPage from './pages/HomePage/AddPointsPage'
import ManageTransactions from './pages/HomePage/ManageTransactions'
import ManageUsers from './pages/HomePage/ManageUsers'
import ManageReports from './pages/HomePage/ManageReports'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login/',
        element: <Login />
      },
      {
        path: 'home/',
        element: <HomePage />,
        children: [
          {
            path: 'receive_payment/',
            element: <ReceivePaymentPage />
          },
          {
            path: 'add_points/',
            element: <AddPointsPage />
          },
          {
            path: 'sales/',
            element: <SalesPage />
          },
          {
            path: 'manage_transactions/',
            element: <ManageTransactions />
          },
          {
            path: 'manage_users/',
            element: <ManageUsers />
          },
          {
            path: 'manage_reports/',
            element: <ManageReports />
          },

        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <GeneralProvider>
      <RouterProvider router={router} />
    </GeneralProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

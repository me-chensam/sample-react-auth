import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout'
import Dashboard from './components/pages/dashboard'
import Login from './components/pages/login'
import Redirect from './redirect'

const create_routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'second-route',
        element: <h2>Hi I ma second route</h2>
      }
    ]
  },
  {
    path: 'login',
    element: <Redirect>
      <Login />
    </Redirect>
  }
])

export default function App() {
  return <RouterProvider router={create_routers} />
}
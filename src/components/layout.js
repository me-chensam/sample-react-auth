import React from 'react'
import { Outlet } from 'react-router-dom'
import Protected from '../protected'
import useAuth from '../contexts/auth'

export default function Layout() {
  const auth = useAuth()
  return (
    <React.Fragment>
      <h1>This is Layout</h1>
      <div>
      <button onClick={auth.signOut}>Logout</button>
      </div>
      <Protected>
        <div>
          <Outlet />
        </div>
      </Protected>
    </React.Fragment>
  )
}
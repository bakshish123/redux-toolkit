import React from 'react'
import {Outlet} from 'react-router-dom'
import NavbarPanel from './NavbarPanel'
import {Provider} from 'react-redux'
import store from '../store/cart'

const RootLayout = () => {
  return (
    <div>
      <Provider store={store}>

        <NavbarPanel />
        <Outlet />
      </Provider>
    </div>
 
  )
}

export default RootLayout
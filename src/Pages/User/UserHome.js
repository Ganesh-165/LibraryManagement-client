import React, { Fragment } from 'react'
import UserNavbar from './UserNavbar'
import { Outlet } from 'react-router-dom'

const UserHome = () => {
  return (
    <Fragment>
        <UserNavbar/>
        <Outlet/>
    </Fragment>
  )
}

export default UserHome
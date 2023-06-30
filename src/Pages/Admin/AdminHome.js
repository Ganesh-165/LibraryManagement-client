import React, { Fragment } from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

const AdminHome = () => {
  return (
    <Fragment>
        <AdminNavbar/>
        <Outlet/>
    </Fragment>
  )
}

export default AdminHome
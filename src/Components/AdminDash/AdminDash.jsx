import React from 'react'
import Sidenav from '../Sidenav/Sidenav'
import HeaderDash from '../Header/HeaderDash'
import'./adminDash.css'


function AdminDash() {
  return (
    <section className='dashboard-body'>
      
      <Sidenav/>
      <HeaderDash/>

    </section>
  )
}

export default AdminDash

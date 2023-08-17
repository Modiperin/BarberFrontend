import React from 'react'
import './AdminHomePage.css'
import useAdminAuth from '../../useAdminAuth'
import Sidebar from './Sidebar'
import Carder from './Carder'
import Table from './Table'
import ServiceModal from './ServiceModal'

export const AdminHomePage = () => {
  const flag = useAdminAuth()
  return (
    <div>
      {
        flag ? <div>
          
          <section className="admin">
          <Sidebar />
          <Carder />
          </section>

          <h3><center>Order Summary</center></h3>
          <Table/>
          <ServiceModal/>



        </div>

          : <h1 style={{ color: 'red' }} >You are not authorized to access</h1>
      }
    </div>
  )
}

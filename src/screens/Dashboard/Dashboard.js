import React from 'react';
import Leftbar from '../../components/Leftbar/Leftbar';
import DashboardContent from '../../components/DashboardContent/DashboardContent';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Leftbar/>
        <DashboardContent/>
    </div>
  )
}

export default Dashboard
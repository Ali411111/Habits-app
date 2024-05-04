import React from 'react'
import Header from './Components/Header/Header'
import SideBarMenu from './Components/SideBarMenu/SideBarMenu'
import DashboardMenu from './Components/DashboardMenu/DashboardMenu'
import RightSideBar from './Components/RightSideBar/RightSideBar'
export default function App() {
  return (
    <div className=' h-full'>
      <Header/> 
      <div className=' xlarge:flex h-full'>
      <SideBarMenu/>
      <DashboardMenu/>
      <RightSideBar/>
      </div>
    </div>
  )
}

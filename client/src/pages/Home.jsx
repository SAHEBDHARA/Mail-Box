import React from 'react'
import NavbarComponent from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Emails from '../components/EmailList/Emails'


const Home = () => {
  return (
    <div>
        <NavbarComponent/>
        <div className='flex flex-row'>
          <Sidebar  />
         <Emails/>
        </div>
    </div>
  )
}

export default Home

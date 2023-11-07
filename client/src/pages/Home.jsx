import React from 'react'
import NavbarComponent from '../components/Navbar/Navbar'
// import EmailEditor from '../components/EmailEditor/EmailEditor'
import Sidebar from '../components/Sidebar/Sidebar'
import EmailTextEditor from '../model/EmailTextEditor'


const Home = () => {
  return (
    <div>
        <NavbarComponent/>
        <div className='flex flex-row'>
          <Sidebar />
          {/* <EmailEditor/> */}
        </div>
    </div>
  )
}

export default Home

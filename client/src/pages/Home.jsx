import React from 'react'
import NavbarComponent from '../components/Navbar/Navbar'
// import EmailEditor from '../components/EmailEditor/EmailEditor'
import EmailEditor from '../components/EmailEditor/EmailEditor'
import Sidebar from '../components/Sidebar/Sidebar'
import EmailForm from '../components/EmailEditor/EmailForm'

const Home = () => {
  return (
    <div>
        <NavbarComponent/>
        <div className='flex flex-row'>
          <Sidebar />
          {/* <EmailForm/> */}
          {/* <EmailEditor/> */}
        </div>
    </div>
  )
}

export default Home

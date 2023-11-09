
// import { useState } from "react"
import Sidebar from "../Sidebar/Sidebar";
import NavbarComponent from "../Navbar/Navbar";
import Emails from "../Inbox/Emails";
// import SentBox from "../sentbox/SentBox";
import SentEmails from "../sentbox/SentEmail";
import Openemail from "../OpenEmail/Openemail";


const List = ({activeComponent }) => {
  let componentToRender;


  switch (activeComponent) {
    case "inbox":
      componentToRender = <Emails />;
      break;
    case "sent":
      componentToRender = <SentEmails />;
      break;
    case "single":
      componentToRender = <Openemail />;
      break;
      default:
        componentToRender = <Emails />;
  }


  return (
    <div>
        <NavbarComponent/>
        <div className='flex flex-row'>
          <Sidebar  />
          {componentToRender}
        </div>
    </div>
  )
}

export default List

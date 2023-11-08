
// import { useState } from "react"
import Sidebar from "../Sidebar/Sidebar";
import NavbarComponent from "../Navbar/Navbar";
import Emails from "../Inbox/Emails";
// import SentBox from "../sentbox/SentBox";
import SentEmails from "../sentbox/SentEmail";

const List = ({activeComponent }) => {
  let componentToRender;


  switch (activeComponent) {
    case "inbox":
      componentToRender = <Emails />;
      break;
    case "sent":
      componentToRender = <SentEmails />;
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

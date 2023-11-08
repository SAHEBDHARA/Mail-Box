import React, { useState } from "react";
import EmailTextEditor from "../../model/EmailTextEditor";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isComposeModalOpen, setComposeModalOpen] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const openComposeModal = () => {
    setComposeModalOpen(true);
  };

  const closeComposeModal = () => {
    setComposeModalOpen(false);
  };

  return (
    <div className="m-7 w-44 space-y-3 border p-2">
      <div className="flex flex-col justify-center items-center bg-[#C2E7FF] rounded-lg h-12 w-28">
        <button className="" onClick={openComposeModal}>
          Compose
        </button>
      </div>
      <div className="w-full">
        <ul className="space-y-3 flex justify-start items-start flex-col ">
          <Link to="/inbox">
            <li
              className={`sidebarlist cursor-pointer ${
                activeItem === 0 ? "bg-[#C2E7FF]" : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              Inbox
            </li>
          </Link>
          <Link to="/stared">
            <li
              className={`sidebarlist cursor-pointer ${
                activeItem === 1 ? "bg-[#C2E7FF]" : ""
              }`}
              onClick={() => handleItemClick(1)}
            >
              Stared
            </li>
          </Link>
          <Link to="/important">
            <li
              className={` sidebarlist  cursor-pointer ${
                activeItem === 2 ? "bg-[#C2E7FF]" : ""
              }`}
              onClick={() => handleItemClick(2)}
            >
              Important
            </li>
          </Link>
          <Link to="/sent">
            <li
              className={`  sidebarlist cursor-pointer ${
                activeItem === 3 ? "bg-[#C2E7FF]" : ""
              }`}
              onClick={() => handleItemClick(3)}
            >
              Sent
            </li>
          </Link>
        </ul>
      </div>
      {isComposeModalOpen && <EmailTextEditor onClose={closeComposeModal} />}
    </div>
  );
};

export default Sidebar;

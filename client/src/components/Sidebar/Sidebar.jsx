import React, { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="m-7 w-44 space-y-3 border h-screen p-2">
      <div className="flex flex-col justify-center items-center bg-[#C2E7FF] rounded-lg h-12 w-28">
        <button className="">Compose</button>
      </div>
      <div className="w-full">
        <ul className="space-y-3 flex justify-start items-start flex-col ">
          <li
            className={`sidebarlist cursor-pointer ${activeItem === 0 ? 'bg-[#C2E7FF]' : ''}`}
            onClick={() => handleItemClick(0)}
          >
            Inbox
          </li>
          <li
            className={` sidebarlist  cursor-pointer ${activeItem === 1 ? 'bg-[#C2E7FF]' : ''}`}
            onClick={() => handleItemClick(1)}
          >
            Stared
          </li>
          <li
            className={` sidebarlist  cursor-pointer ${activeItem === 2 ? 'bg-[#C2E7FF]' : ''}`}
            onClick={() => handleItemClick(2)}
          >
            Important
          </li>
          <li
            className={`  sidebarlist cursor-pointer ${activeItem === 3 ? 'bg-[#C2E7FF]' : ''}`}
            onClick={() => handleItemClick(3)}
          >
            Sent
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

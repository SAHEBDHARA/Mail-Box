import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmailList = ({ name, sub, Ctime, id }) => {
  // console.log(Ctime)
  const date = new Date(Ctime);
  const hours = date.getHours() % 12 || 12; // Ensure it's in 12-hour format
  const minutes = date.getMinutes();
  const amOrPm = date.getHours() < 12 ? "AM" : "PM";
  const formattedTime = `${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${amOrPm}`;

  return (
    <div className="emailListContainer w-[95%] h-10  mb-2 cursor-pointer">
      <Link to={`/email/${id}`}>
      <div className="flex flex-row items-center justify-between">
        <h1 className="px-4 py-2 font-bold text-[17px] capitalize">{name}</h1>
        <p>{sub}</p>
        <p className="px-4">{formattedTime}</p>
      </div>
      </Link>
    </div>
  );
};

export default EmailList;

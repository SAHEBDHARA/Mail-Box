import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EmailList = ({ name, sub, Ctime, id, onDelete }) => {
  // console.log(Ctime)
  const date = new Date(Ctime);
  const hours = date.getHours() % 12 || 12; // Ensure it's in 12-hour format
  const minutes = date.getMinutes();
  const amOrPm = date.getHours() < 12 ? "AM" : "PM";
  const formattedTime = `${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${amOrPm}`;


  const handleDeleteClick = async () => {
    try {
      // Make the DELETE request to your API
      const response = await axios.delete(`http://localhost:3000/api/email/delete/${id}`);

      if (response.status === 200) {
        console.log("Email deleted successfully");
        onDelete(id)
      } else {
        console.log("Failed to delete email");
      }
    } catch (error) {
      console.error("Error deleting email: ", error);
    }
  };

  return (
    <div className="emailListContainer w-[95%] h-10  mb-2 cursor-pointer relative">
      <Link to={`/email/${id}`}>
      <div className="flex flex-row items-center justify-between w-96 absolute">
        <h1 className="px-4 py-2 font-bold text-[17px] capitalize">{name}</h1>
        <p>{sub}</p>
        <p className="px-4">{formattedTime}</p>
      
      </div>

      </Link>
      <div className="flex space-x-2 absolute top-1 ml-[1000px]">
      <button className="bg-red-300 rounded-lg px-1 hover:bg-red-500" onClick={handleDeleteClick}>Delete</button>
      <div className="mx-2 bg-slate-500 rounded-lg px-1 hover:bg-white"> star</div>
      </div>
    </div>
  );
};

export default EmailList;

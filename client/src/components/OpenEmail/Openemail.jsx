import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';

const Openemail = () => {
  const { id } = useParams();
  const [emailData, setEmaildata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState("...");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/email/getemails"
      );

      if (response.status === 200) {
        console.log("Email data retrieved successfully");
        const allEmails = response.data; // This is an array of all email objects
        const filteredEmails = await allEmails.filter(
          (email) => email._id === id
        );
        setEmaildata(filteredEmails);
      } else {
        console.log("Request error: ", response.data);
      }
    } catch (err) {
      console.error("Error: ", err);
    } finally {
      setLoading(false); // Set loading to false when the data retrieval is complete
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(emailData[0])




  return (
    <div className="m-10 h-96 mx-24 outline-gray-500 rounded-md w-full">
      {loading ? (
        <p className="flex item-center justify-center">Loadinig....</p>
      ) : (
    <div className="flex flex-col justify-center items-center w-full h-[50%] max-w-md mx-auto mt-8 p-4 bg-white border rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
      <div className="anemandemail">
        <h1 className="font-bold text-lg">{emailData[0].subject}</h1>
        <p className="text-gray-600">{emailData[0].sender}</p>
      </div>
      <div className="time text-gray-600">{emailData[0].updatedAt}</div>
    </div>
    <div className="body">
      {/* {emailData[0].body} */}
      {ReactHtmlParser(emailData[0].body)} 
    </div>
  </div>
      )}
    </div>

  );
};

export default Openemail;

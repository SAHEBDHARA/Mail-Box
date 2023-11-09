import React, { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import axios from "axios";
import SentEmails from "./SentEmails";

const SentEmail = () => {
  const { currentUser } = useContext(AuthContext);
  const [emailData, setEmailData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/email/getemails"
      );

      if (response.status === 200) {
        console.log("Email data retrieved successfully");
        const allEmails = response.data; // This is an array of all email objects
        const filteredEmails = allEmails.filter(
          (email) => email.sender === currentUser.data.email
        );
        setEmailData(filteredEmails);
      } else {
        console.log("Request error: ", response.data);
      }
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-10 flex flex-col w-full">
      {emailData.map((email) => (
        <SentEmails
          key={email._id}
          id={email._id}
          name={email.username}
          Ctime={email.createdAt}
          sub={email.subject}
        />
      ))}
    </div>
  );
};

export default SentEmail;

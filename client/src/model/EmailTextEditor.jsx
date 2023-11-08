import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';


const EmailTextEditor = ({ onClose,   }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const {currentUser} = useContext(AuthContext)


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   const emailSchima = {
    sender: currentUser.email,
    recipientEmail:email,
    subject: subject,
    body:message
   }
   // posting data 
 try {
   const response = await axios.post(
    "http://localhost:3000/api/email/send", emailSchima);
    if(response.status === 200) {
      console.log("email sent successfully")
    onClose();
    }else{
      console.log("registration error: ", response.data)
    }
 } catch (error) {
  console.log("Axios error: ", error)
 }
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed z-10 inset-0 ml-[50%] h-96">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={onClose}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Compose Email</h3>
                      <div className="mt-2">
                        <div className="mt-2">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                            className="inputField w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter email address"
                            
                          />
                        </div>
                        <div className="mt-2">
                          <input
                            type="text"
                            value={subject}
                            onChange={handleSubjectChange}
                            className=" inputField w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter subject"
                          />
                        </div>
                        <div className="mt-2">
                          <textarea
                            value={message}
                            onChange={handleMessageChange}
                            className=" inputField w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter your message"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3  sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="px-3 py-2 border-solid bg-indigo-600 rounded-lg ml-4 text-white"
                  >
                    Send Email
                  </button>
                  <button
                    onClick={onClose}
                    type="button"
                    className="px-3 py-2 border-solid  bg-slate-200 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      
    </>
  );
};

export default EmailTextEditor;

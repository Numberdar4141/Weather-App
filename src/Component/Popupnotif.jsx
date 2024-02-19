import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";

const Popupnotif = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    // Logic for form submission
    // For now, just show the popup
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // Additional logic can be added here if needed
  };

  return (
    <div className="h-screen flex justify-center items-center bg-blue-800">
      <button 
        className="text-blue-500 bg-white w-[130px] text-[25px] font-semibold h-[60px] rounded-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute bg-white rounded-lg p-8">
            <FaCheckCircle className="text-green-500 mx-auto" size={60} />
            <h2 className="text-center text-2xl font-semibold mt-4">Thank you!</h2>
            <p className="text-center">Your details have been successfully submitted. Thanks!</p>
            <button 
              className="block mx-auto bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
              onClick={handleClosePopup}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popupnotif;

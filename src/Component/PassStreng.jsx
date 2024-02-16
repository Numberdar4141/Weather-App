import React, { useState } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const PassStreng = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleChange = (event) => {
    const pass = event.target;
    const passValue = pass.value;

    setPassword(passValue);

    if (passValue.length > 0) {
      document.getElementById("message").style.display = "block";
    } else {
      document.getElementById("message").style.display = "none";
    }

    if (passValue.length < 4) {
      setStrength("weak");
      pass.style.borderColor = "#ff5925";
      document.getElementById("message").style.color = "#ff5925";
    } else if (passValue.length >= 4 && passValue.length < 8) {
      setStrength("medium");
      pass.style.borderColor = "yellow";
      document.getElementById("message").style.color = "yellow";
    } else if (passValue.length >= 8) {
      setStrength("strong");
      pass.style.borderColor = "#26d730";
      document.getElementById("message").style.color = "#26d730";
    }
  };

  return (
    <div>
      <div className='h-screen flex justify-center items-center bg-gray-300'>
        <div>
          <h1 className='text-[25px] text-red-900 '>Password Strength</h1>
          <input
            className='bg-gray-300 placeholder:text-gray-700  outline-none placeholder:text-[20px] border-gray-600 rounded-xl p-[20px] border-4 border-solid w-[400px] h-[60px]'
            type="password"
            placeholder='Password'
            value={password}
            onChange={handleChange}
          />
          <button>
            <FaArrowCircleRight className='w-[50px] translate-y-3 -translate-x-[60px] h-[40px]' />
          </button>
          <p className='mt-[10px] text-[23px] hidden' id="message">
            Password is <span id='strength'>{strength}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassStreng;

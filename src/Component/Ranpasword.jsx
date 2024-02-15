import React, { useState } from 'react';
import { FaCopy } from "react-icons/fa";

const Ranpasword = () => {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generateRandomPassword = () => {
    const length = 10;
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbol = "@!#$%^&*(){}[]><?/|+=";
    const allchar = uppercase + lowercase + number + symbol;

    let password = '';
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    for (let i = 0; i < length - 4; i++) {
      password += allchar[Math.floor(Math.random() * allchar.length)];
    }

    // Shuffle the password characters
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    setPassword(password);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    // Reset copied state after 3 seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className='bg-purple-600 h-screen flex justify-center items-center'>
      <div className='text-white text-3xl font-semibold text-center'>
        <h1>Generate a <br /> <span className='text-red-400'>Random Password</span></h1>
        <div className='flex justify-center items-center'>
          <input className='rounded-lg p-3 text-black mr-2 w-64' type="text" value={password} readOnly />
          <button onClick={handleCopy} className='text-red-400 focus:outline-none'><FaCopy /></button>
        </div>
        <button onClick={generateRandomPassword} className='bg-red-400 text-lg px-6 py-3 rounded-lg mt-4'>Generate Password</button>
        {copied && <p className="text-green-500 mt-2">Text copied!</p>}
      </div>
    </div>
  );
};

export default Ranpasword;

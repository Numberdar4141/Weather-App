import React, { useState } from 'react';
import './qr.css';

const QRGenerator = () => {
  const [qrText, setQrText] = useState('');
  const [showQR, setShowQR] = useState(false); // State to manage whether to show QR code or not

  function generateQR() {
    const qrImage = document.getElementById('qrImage');
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`;
    setShowQR(true); // Set showQR to true to display QR code
  }

  return (
    <div className='bg-gray-400 justify-center items-center flex h-screen'>
      <div className='bg-white rounded-xl shadow-2xl w-[400px]'>
        <p className='mt-[30px] m-[10px] text-[20px] font-semibold ml-[40px]'>
          Enter Your Text or Url
        </p>
        <input
          type='text'
          className='bg-gray-200 w-[350px] rounded-xl ml-[30px] pl-[20px] h-[70px]'
          value={qrText}
          onChange={(e) => setQrText(e.target.value)}
          placeholder='Text Or URL...'
        />
        {/* Apply conditional rendering based on showQR state */}
        <div id='imgBox' className={`w-[270px] rounded-md ml-[70px] mt-[30px] overflow-hidden transition-all duration-500 ease-in-out ${showQR ? 'h-[300px]' : 'h-[0px]'}`}>
          <img src='' alt='' className='w-[100%] p-[10px]' id='qrImage' />
        </div>
        <button
          onClick={generateQR}
          className='m-[30px] bg-blue-500 w-[350px] font-medium text-white h-[50px] rounded-xl'
        >
          Generate QR code
        </button>
      </div>
    </div>
  );
};

export default QRGenerator;

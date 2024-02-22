import React, { useState } from 'react';

const AgeCalcul = () => {
  const [age, setAge] = useState(null);

  function calculateAge() {
    let userinput = document.getElementById("date").value;
    let birthdate = new Date(userinput);
    let today = new Date();
    let y1 = birthdate.getFullYear();
    let m1 = birthdate.getMonth() + 1;
    let d1 = birthdate.getDate();
    let y2 = today.getFullYear();
    let m2 = today.getMonth() + 1;
    let d2 = today.getDate();

    let ageYears = y2 - y1;
    let ageMonths = m2 - m1;
    let ageDays = d2 - d1;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }

    if (ageDays < 0) {
      let prevMonth = new Date(y2, m2 - 1, 0);
      ageDays = prevMonth.getDate() + ageDays;
      ageMonths--;
    }

    setAge({ years: ageYears, months: ageMonths, days: ageDays });
  }

  return (
    <div>
      <div className='h-screen flex items-center justify-center bg-blue-800'>
        <div className=' items-center'>
          <h1 className='text-white text-[45px] font-semibold'>
            JavaScript <br /> <span className='text-yellow-400'>Age Calculator</span>
          </h1>
          <div className='mt-[40px] p-[35px] w-[600px] rounded-lg bg-gray-400  flex   items-center  ' >

            <input className=' flex-1 mr-[20px] pt-[14px]  text-[18px] rounded-xl p-[15px]  relative pr-[20px] border-0 outline-0 ' type="date" id='date' onClick={(e) => e.target.focus()} />
            <button onClick={calculateAge} className='bg-blue-800 text-white h-[60px] rounded-lg w-[100px] ' >Calculate</button>
          </div>
          {age !== null && (
            <div className='text-white mt-4'>
              <p className='text-xl'>Your age is {age.years} years, {age.months} months, and {age.days} days.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default AgeCalcul;

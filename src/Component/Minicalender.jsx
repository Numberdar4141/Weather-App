import React from 'react'

const Minicalender = () => {
    const date = document.getElementById("date");
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    const today = new Date();

    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    const allmonths = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

    date.innerHTML =(today.getDate()<10?"0":"")+ today.getDate();
    day.innerHTML = weekdays[today.getDay()];
    month.innerHTML = allmonths[today.getMonth()];
    year.innerHTML = today.getFullYear();

   


  return (
    <div>
      <div className='bg-purple-700 flex justify-center flex-col items-center h-screen'>
        <div className=' text-[30px] font-semibold text-white m-[10px]'>Mini Calender📆</div>
        <div className=' flex  w-[300px]  font-semibold rounded-2xl h-[250px] bg-white  items-center'>
            <div className='w-[58%] flex  flex-col items-center justify-center text-[25px] h-[100%]'>
                <p className='text-[80px] ' id="date">01</p>
                <p id='day'>Sunday</p>
            </div>
            <div className='w-[42%] flex rounded-tr-2xl  flex-col rounded-br-2xl text-white items-center justify-center bg-orange-500 text-[25px] h-[100%]'>
                <p id='month'>Jan</p>
                <p id='year'>2024</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Minicalender

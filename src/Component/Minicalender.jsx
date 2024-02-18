import React, { useState, useEffect } from 'react';

const Minicalender = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Update every second
        return () => clearInterval(interval); // Cleanup on unmount
    }, []); // Empty dependency array means this effect runs once after initial render

    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const allMonths = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div>
            <div className='bg-purple-700 flex justify-center flex-col items-center h-screen'>
                <div className=' text-[30px] font-semibold text-white m-[10px]'>Mini Calendar📆</div>
                <div className='flex w-[300px] font-semibold rounded-2xl h-[250px] bg-white items-center'>
                    <div className='w-[58%] flex flex-col items-center justify-center text-[25px] h-[100%]'>
                        <p className='text-[80px]'>{currentDate.getDate()}</p>
                        <p>{weekdays[currentDate.getDay()]}</p>
                    </div>
                    <div className='w-[42%] flex rounded-tr-2xl flex-col rounded-br-2xl text-white items-center justify-center bg-orange-500 text-[25px] h-[100%]'>
                        <p>{allMonths[currentDate.getMonth()]}</p>
                        <p>{currentDate.getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Minicalender;

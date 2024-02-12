import React, { useState } from 'react'
import i1 from "../Assests/icon.png"
import { MdDeleteForever } from "react-icons/md";
import { IoAdd } from "react-icons/io5";


const Dolist = (props) => {
    const items = props.data.map(
        () => {
            return <Dolist/>
        }
    )

    const [done,setDone] = useState(false);
  return (
    <div className='h-screen flex items-center justify-center bg-gray-300'>

    <div className=' w-[607px] h-[829px] bg-blue-400 rounded-2xl    '>
        <div className='flex text-[25px] mt-[70px] ml-[70px] font-semibold'>
            To-Do-List
            <img src={i1}  className='w-[40px]' alt="" />
            <div>
                
            </div>
        </div>
      <div className=' flex mt-[70px]  ml-[70px] '>
        <input type="text"  className=' todo-input w-[400px] text-[20px] h-[70px]  p-[30px] rounded-full '  placeholder='Add your Text...'/>
        <button className='w-[70px] h-[70px] ml-[20px] p-[10px] text-[50px] rounded-full bg-white'>
     <IoAdd/>

        </button>
    </div>
    <div>
        <div onClick={()=> setDone(!done)} className={`  select-none text-[30px] font-medium justify-between flex w-full  cursor-pointer border-b p-3`}>
            <div>
                <span className='pr-2 text-[20px]'>
10.30 A.M
                </span>
                <span className={`${done=== true ?'line-through':''}`}>
{items}
                </span>
            </div>
            <div className='text-[40px]'><MdDeleteForever /></div>
            
            
            
            </div>
    </div>

      </div>
 
    </div>
    
  )
}

export default Dolist

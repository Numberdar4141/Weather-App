import React, { useState } from 'react';
import i1 from "../Assests/icon.png";
import { MdDeleteForever } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

const Dolist = (props) => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAddTask = () => {
    if (inputText.trim() !== "") {
      setTasks([...tasks, { text: inputText, done: false, timestamp: new Date().toLocaleTimeString() }]);
      setInputText("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <div className='h-screen flex items-center justify-center bg-gray-300'>
      <div className='w-[607px] h-[829px] bg-blue-400 rounded-2xl'>
        <div className='flex text-[25px] mt-[70px] ml-[70px] font-semibold'>
          To-Do-List
          <img src={i1} className='w-[40px]' alt="" />
        </div>
        <div className='flex mt-[70px] ml-[70px] '>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className='todo-input w-[400px] text-[20px] h-[70px]  p-[30px] rounded-full'
            placeholder='Add your Text...'
          />
          <button
            onClick={handleAddTask}
            className='w-[70px] h-[70px] ml-[20px] p-[10px] text-[50px] rounded-full bg-white'
          >
            <IoAdd />
          </button>
        </div>
        <div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`select-none text-[30px] font-medium justify-between flex w-full cursor-pointer border-b p-3`}
            >
              <div onClick={() => handleToggleTask(index)}>
                <span className='pr-2 text-[20px]'>{task.timestamp}</span>
                <span className= {  task.done ? "line-through" : ""  }>{task.text}</span>
              </div>
              <div className='text-[40px]' onClick={() => handleDeleteTask(index)}>
                <MdDeleteForever className='text-red-600' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dolist;

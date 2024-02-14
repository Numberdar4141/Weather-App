import React, { useEffect, useState } from 'react';

const Dragdrop4 = () => {
  const [sourceBox, setSourceBox] = useState(null);

  useEffect(() => {
    const lists = document.querySelectorAll('.list');
    const leftBox = document.querySelector('.left');
    const rightBox = document.querySelector('.right');

    lists.forEach(list => {
      list.addEventListener('dragstart', e => {
        const selected = e.target;
        e.dataTransfer.setData('text/plain', ''); // required for Firefox
        selected.classList.add('dragging');
        setSourceBox(selected.parentElement);
      });

      list.addEventListener('dragend', e => {
        const selected = e.target;
        selected.classList.remove('dragging');
        setSourceBox(null);
      });
    });

    leftBox.addEventListener('dragover', e => {
      e.preventDefault();
      if (sourceBox === rightBox) {
        const selected = document.querySelector('.dragging');
        if (selected) {
          leftBox.appendChild(selected);
        }
      }
    });

    rightBox.addEventListener('dragover', e => {
      e.preventDefault();
      if (sourceBox === leftBox) {
        const selected = document.querySelector('.dragging');
        if (selected) {
          rightBox.appendChild(selected);
        }
      }
    });
  }, [sourceBox]);

  return (
    <div>
      <div className='h-screen flex justify-center items-center bg-purple-800'>
        <div className='flex gap-[100px]'>
          <div className='left w-[300px] border-dotted border-2 h-[350px]'>
            <div
              className='list w-[250px] h-[60px] p-[10px] text-white rounded-lg font-semibold text-[25px] m-[22px] bg-red-500'
              draggable='true'
            >
              Item 1
            </div>
            <div
              className='list w-[250px] h-[60px] p-[10px] text-white rounded-lg font-semibold text-[25px] m-[22px] bg-red-500'
              draggable='true'
            >
              Item 2
            </div>
            <div
              className='list w-[250px] h-[60px] p-[10px] text-white rounded-lg font-semibold text-[25px] m-[22px] bg-red-500'
              draggable='true'
            >
              Item 3
            </div>
            <div
              className='list w-[250px] h-[60px] p-[10px] text-white rounded-lg font-semibold text-[25px] m-[22px] bg-red-500'
              draggable='true'
            >
              Item 4
            </div>
          </div>
          <div className='right w-[300px] border-dotted border-2 h-[350px]'></div>
        </div>
      </div>
    </div>
  );
};

export default Dragdrop4;

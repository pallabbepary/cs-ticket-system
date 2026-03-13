import React from 'react';
import { toast } from 'react-toastify';

const selectedCard = ({selectedCard, removeTaskStatus, handleCompleteTask}) => {
    console.log(selectedCard)
    const handelRemoved = () =>{
        handleCompleteTask(selectedCard);
        removeTaskStatus(selectedCard)
        if(handelRemoved){
            toast("Task Complete")
            return
        }
    }
    return (
        <div className='card bg-white p-4 shadow-sm w-[358px] space-y-3 '>
            <h1 className='font-bold text-lg'>{selectedCard.title}</h1>
            <button onClick={handelRemoved} className='btn bg-[#02A53B] text-white text-xl rounded-lg'>Complete</button>
        </div>
    );
};

export default selectedCard;
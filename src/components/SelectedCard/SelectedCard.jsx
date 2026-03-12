import React from 'react';

const selectedCard = ({selectedCard}) => {
    console.log(selectedCard)
    return (
        <div className='card bg-white p-4 shadow-sm w-[358px] space-y-3 '>
            <h1 className='font-bold text-lg'>{selectedCard.title}</h1>
            <button className='btn bg-[#02A53B] text-white text-xl rounded-lg'>Complete</button>
        </div>
    );
};

export default selectedCard;
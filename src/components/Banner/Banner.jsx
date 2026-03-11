import React from 'react';
import bgImg from '../../assets/Clippath.png'

const Banner = () => {
    return (
        <main className='mt-10'>
            <section className='w-11/12 mx-auto grid grid-cols-2 gap-8'>
                
                    <section className='relative bg-[linear-gradient(135deg,#5f2cff,#7c4dff,#b56cff)] text-white h-60 flex flex-col items-center justify-center rounded-xl' >
                    <img src={bgImg} class="absolute inset-0"/>
                    <img src={bgImg} class="absolute -right-1.5 rotate-y-180"/>
                    <h2 className='text-2xl'>In-Progress</h2>
                    <h1 className='font-bold text-6xl'>0</h1>
                </section>
                
                <section className='relative bg-[linear-gradient(135deg,#5f2cff,#7c4dff,#b56cff)] text-white h-60 flex flex-col items-center justify-center rounded-xl' >
                    <img src={bgImg} class="absolute -left-1.5"/>
                    <img src={bgImg} class="absolute -right-1.5 rotate-y-180"/>
                    <h2 className='text-2xl'>Resolved</h2>
                    <h1 className='font-bold text-6xl'>0</h1>
                </section>
            </section>
            
        </main>
    );
};

export default Banner;
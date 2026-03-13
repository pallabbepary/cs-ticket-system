import React, { use } from 'react';
import open from '../../assets/Ellipse-22.png'
import Vector from '../../assets/Vector.png'
import SelectedCard from '../../components/SelectedCard/SelectedCard';
import { toast } from 'react-toastify';

const CustomerTickets = ({customerPromise, selectedCards, setSelectedCards, removeTaskStatus}) => {

    const customerData = use(customerPromise)
    // console.log(customerData)

    
    return (
        <section className='w-11/12 mx-auto my-20 md:flex justify-between gap-5'>
            
            <div className='space-y-8'>
                <div>
                    <h1 className='font-semibold text-2xl'>Customer Tickets</h1>
                </div>
                    <div className='grid md:grid-cols-2 gap-5'>
                        {
                            customerData.map(customer => <div onClick={() => {
                                
                                setSelectedCards([...selectedCards, customer])
                                if(setSelectedCards){
                                    toast("card adds")
                                    return
                                }
                            }} className="card bg-base-100 shadow-sm">
                                <div className="card-body space-y-1">
                                    <div className='flex justify-between items-center'>
                                        <h2 className="card-title text-sm md:text-xl font-medium">{customer.title}</h2>
                                        <span className='flex items-center space-x-1'>
                                            <img className='w-[16px] h-[16px]' src={open} alt="" />
                                            <a href="">{customer.status}</a>
                                        </span>
                                    </div>
                                    <p className='text-gray-500'>{customer.description}</p>
                                    <div className=" card-actions space-x-3 justify-between">
                                        <div className='md:flex gap-3'>
                                            <span className='text-gray-500'>#{customer.id}</span>
                                            <h5 className=''>{customer.priority}</h5>
                                        </div>
                                        <div className='md:flex gap-3'>
                                            <span className='md:text-[15px] text-gray-500'>{customer.customer}</span>
                                            <div className='flex space-x-2'>
                                                <img className='md:h-[24px] md:w-[24px] text-gray-500' src={Vector} alt="" />
                                                <h3 className='md:text-[15px] text-gray-500'>{customer.createdAt}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    </div>)
                        }
                        
                    </div>
            </div>

            <div className='space-y-8'>
                <div>
                    <h1 className='font-semibold text-2xl mt-5 md:mt-0'>Task Status</h1>
                </div>
                <div className='space-y-4'>
                    {
                        selectedCards.map(selectedCard => <SelectedCard removeTaskStatus={removeTaskStatus} selectedCard={selectedCard}></SelectedCard>)
                    }
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Resolved Task</h1>
                    <span className='text-gray-500 text-[18px]'>No resolved tasks yet.</span>
                </div>
            </div>
        </section>
        
    );
};

export default CustomerTickets;
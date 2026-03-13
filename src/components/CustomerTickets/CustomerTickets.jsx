import React, { use } from 'react';
import open from '../../assets/Ellipse-22.png'
import Vector from '../../assets/Vector.png'
import SelectedCard from '../../components/SelectedCard/SelectedCard';
import { toast } from 'react-toastify';

const CustomerTickets = ({customerPromise, selectedCards, setSelectedCards, removeTaskStatus, handleCompleteTask, resolvedTasks}) => {

    const customerData = use(customerPromise)

    

    
    return (
        <section className='w-11/12 mx-auto my-20 md:flex justify-between gap-5'>
            
            <div className='space-y-8'>
                <div>
                    <h1 className='font-semibold text-2xl'>Customer Tickets</h1>
                </div>
                    <div className='grid md:grid-cols-2 gap-5'>
                        {
                            customerData.map(customer => <div onClick={() => {

                                
                            if(!selectedCards.find(c => c.id === customer.id)){
                                setSelectedCards([...selectedCards, customer]);
                                toast.success("Card Added");
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
                        selectedCards.map(selectedCard => 
                        <SelectedCard
                             removeTaskStatus={removeTaskStatus} 
                             selectedCard={selectedCard}
                              handleCompleteTask={handleCompleteTask}>

                        </SelectedCard>)
                    }
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Resolved Task</h1>


                    <div className='mt-3 space-y-2'>
                        {resolvedTasks.length > 0 ? (
                            resolvedTasks.map((task, index) => (
                                <div key={index} className='bg-[#E0E7FF] rounded-lg p-4'>
                                    <h1 className='font-bold text-xl'>{task.title}</h1>
                                </div>
                            ))
                        ) : (
                            <p className='text-gray-500'>No resolved tasks yet</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default CustomerTickets;

import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';


const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <header className='md:shadow '>
            <nav className='w-11/12 mx-auto py-4'>
                <section>
                    <div class="">
                        
                        <div class="flex justify-between">
                           
                            <span className='flex items-center' onClick={() => setOpen(!open)}>
                                
                                 {
                                open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
                            }
                            
                            <div>
                                <a class="btn bg-no-repeat font-bold btn-ghost pl-18 md:pl-0 md:text-2xl text-lg">CS — Ticket System</a>
                            </div>
                            </span>
                            <div class="md:flex gap-8 items-center hidden md:block">
                                <a class = "font-semibold" href="/home">Home</a>
                                <a class = "font-semibold" href="/faq">FAQ</a>
                                <a class = "font-semibold" href="/changelog">Changelog</a>
                                <a class = "font-semibold" href="/blog">Blog</a>
                                <a class = "font-semibold" href="/download">Download</a>
                                <a class = "font-semibold" href="/contact">Contact</a>
                                <button class = "btn rounded-lg text-white  font-bold text-[16px] bg-gradient-to-r from-indigo-500 to-[#422ad5]"><a href="">+ New Ticket</a></button>
                            </div>
                        
                        </div>
                        <div class={`ml-8  grid md:hidden duration-1000 ${open ? "top-15 " : "-top-60 absolute"}`}>
                                <a class = "font-semibold" href="/home">Home</a>
                                <a class = "font-semibold" href="/faq">FAQ</a>
                                <a class = "font-semibold" href="/changelog">Changelog</a>
                                <a class = "font-semibold" href="/blog">Blog</a>
                                <a class = "font-semibold" href="/download">Download</a>
                                <a class = "font-semibold" href="/contact">Contact</a>
                               <a class = "btn rounded-lg text-white  md:font-bold md:text-[16px] bg-gradient-to-r from-indigo-500 to-[#422ad5]" href="/newticket">+ New Ticket</a>
                            </div>
                    </div>
                </section>
            </nav>
        </header>
    );
};

export default Navbar;
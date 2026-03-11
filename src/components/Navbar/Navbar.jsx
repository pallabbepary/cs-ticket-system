import React from 'react';

const Navbar = () => {
    return (
        <header className='shadow '>
            <nav className='w-11/12 mx-auto py-4'>
                <section>
                    <div class=" ">
                        <div class="flex-1">
                            <a class="text-xl">
                            
                            </a>
                        </div>
                        <div class="flex justify-between">
                            <div>
                                <a class="btn font-bold btn-ghost text-2xl">CS — Ticket System</a>
                            </div>
                            <div class="flex gap-8 items-center">
                                <button class = "font-semibold"><a href="">Home</a></button>
                                <button class = "font-semibold"><a href="">FAQ</a></button>
                                <button class = "font-semibold"><a href="">Changelog</a></button>
                                <button class = "font-semibold"><a href="">Blog</a></button>
                                <button class = "font-semibold"><a href="">Download</a></button>
                                <button class = "font-semibold"><a href="">Contact</a></button>
                                <button class = "btn rounded-lg text-white  font-bold text-[16px] bg-gradient-to-r from-indigo-500 to-[#422ad5]"><a href="">+ New Ticket</a></button>
                            </div>
                        
                        </div>
                    </div>
                </section>
            </nav>
        </header>
    );
};

export default Navbar;
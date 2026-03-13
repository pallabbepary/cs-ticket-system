import React from 'react';
import Email from '../../assets/email.png'
import Facebook from '../../assets/facebook.png'
import Linkedin from '../../assets/linkedin.png'
import Twitter from '../../assets/x.png'


const Footer = () => {
    return (
        <footer className=' bg-blue-950 pt-25 pb-10'>
            <section className='w-11/12 mx-auto md:grid md:grid-cols-5  border-b-2 border-gray-400 '>
                <div className='space-y-5'>
                    <a href='' className='text-white font-bold text-2xl'>CS — Ticket System</a>
                    <p className='text-gray-400'>CS — Ticket System is a streamlined support solution designed to bridge the gap between businesses and customers. We empower teams to resolve queries faster, ensuring every ticket is handled with precision and care.</p>
                </div>
                <div className='space-y-5'>
                    <h1 className='font-semibold text-2xl mt-8 md:mt-0 text-white'>Company</h1>
                    <div className='grid text-gray-400 space-y-4'>
                        <a href="">About Us</a>
                        <a href="">Our Mission</a>
                        <a href="">Contact Saled</a>
                    </div>
                </div>
                <div className='space-y-5'>
                    <h1 className='font-semibold text-2xl mt-8 md:mt-0 text-white'>Services</h1>
                    <div className='grid text-gray-400 space-y-4'>
                        <a href="">Products & Services</a>
                        <a href="">Customer Stories</a>
                        <a href="">Download Apps</a>
                    </div>
                </div>
                <div className='space-y-5'>
                    <h1 className='font-semibold text-2xl mt-8 md:mt-0 text-white'>Information</h1>
                    <div className='grid text-gray-400 space-y-4'>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Join Us</a>
                    </div>
                </div>
                <div className='space-y-5 pb-8 md:pb-15'>
                    <h1 className='font-semibold text-2xl mt-8 md:mt-0 text-white'>Social Links</h1>
                    <div className='grid text-gray-400 space-y-4'>
                        <a href=""><img src={Email} alt="" /></a>
                        <a href=""><img src={Facebook} alt="" /></a>
                        <a href=""><img src={Linkedin} alt="" /></a>
                        <a href=""><img src={Twitter} alt="" /></a>
                    </div>
                </div>
            </section>
            <span className='text-gray-400 flex justify-center text-sm pt-10'>Copyright © 2026 CS — Ticket System. All Rights Reserved.</span>
        </footer>
    );
};

export default Footer;
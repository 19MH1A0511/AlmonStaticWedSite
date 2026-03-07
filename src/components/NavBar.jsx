import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const NavBar = () => {
    return (
        <>
            <div>
                <div className='flex items-center gap-3 bg-blue-950 text-white pt-4 py-3.5 justify-between'>
                    <div className='flex items-center gap-2'>
                        <MdEmail size={15} />
                        <h3>chittidiganesh999@gmail.com</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaPhoneAlt size={15} />
                        <h3>+91 9963031889</h3>
                    </div>
                    <div className='flex items-center gap-8 cursor-pointer'>
                        <FaWhatsapp size={25} />
                        <FaFacebook size={25} />
                        <FaInstagram size={25} />
                        <FaLinkedinIn size={25} />
                    </div>
                </div>
                <div>
                    {/* Navbar */}
                    <div className='flex items-center pb-4 py-3.5'>
                        <div className='px-8'><h1 className='text-2xl font-bold text-blue-950 pr-25'>Almonx</h1></div>
                        <div className='flex items-center gap-8'>
                            {/* <h3 className='text-lg font-medium text-gray-600 hover:text-blue-950 cursor-pointer'>Home</h3> */}
                            <h3 className="relative cursor-pointer text-lg font-medium text-gray-600
after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-blue-950
after:transition-all after:duration-300 hover:after:w-full">
                                Home
                            </h3>
                            <h3 className="relative cursor-pointer text-lg font-medium text-gray-600
after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-blue-950
after:transition-all after:duration-300 hover:after:w-full">
                                Services
                            </h3>
                            <h3 className="relative cursor-pointer text-lg font-medium text-gray-600
after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-blue-950
after:transition-all after:duration-300 hover:after:w-full">
                                About Us
                            </h3>
                            <h3 className="relative cursor-pointer text-lg font-medium text-gray-600
after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-blue-950
after:transition-all after:duration-300 hover:after:w-full">
                                Contact
                            </h3>
                            <h3 className="relative cursor-pointer text-lg font-medium text-gray-600
after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-blue-950
after:transition-all after:duration-300 hover:after:w-full">
                                Our Products
                            </h3>
                            <h3 className="relative cursor-pointer text-lg font-medium text-gray-600
after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-blue-950
after:transition-all after:duration-300 hover:after:w-full">
                                Our Team
                            </h3>
                            <h3 className="relative cursor-pointer text-lg font-medium text-gray-600
after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-blue-950
after:transition-all after:duration-300 hover:after:w-full">
                                Career
                            </h3>
                            <h3 className="relative cursor-pointer text-lg font-medium text-gray-600
after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-blue-950
after:transition-all after:duration-300 hover:after:w-full">Blog</h3>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default NavBar;

import React from 'react';
import {FaFacebook,FaTelegram,FaInstagramSquare} from 'react-icons/fa';

const Footer = ()=> {
    return (
        <div className='flex flex-col sm:flex justify-between items-center p-8 bg-[#0a192f] border-t-2 border-[#62CDFF]' >
              <p className="text-gray-300 font-bold">Contact me on social networks</p>
           <div className="flex">
                    <a href="https://www.facebook.com/nageso.haile" className='text-gray-300 m-2 '><FaFacebook /></a>
                    <a href="@NahiliHesa" className='text-gray-300 m-2 '><FaTelegram /></a>
                    <a href="" className='text-gray-300 m-2'><FaInstagramSquare /></a>   
                </div>
            <div>
              <p className="text-gray-300">&copy; 2023 <a href='#'>Nageso Haile</a>. All rights reserved.</p>
            </div>
            <div>

                
                   <p className="mb-0 text-gray-300">
                        <a href="#">Design by</a>
                        {" | "}
                        <a href="3">Nageso Haile</a>
                    </p>
                    
            </div>

        </div>
    );
}


export default Footer;
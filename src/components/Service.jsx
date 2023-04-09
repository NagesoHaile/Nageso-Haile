import React from 'react';
import Webdev from '../assets/website.jpg';
import Mobile from '../assets/mobile.jpg';

const Service = ()=>{
    return(
       <div name="service" className="bg-[#0a192f] py-8 h-screen "> 
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
                    <div className="flex flex-col justify-center items-center mb-8">
                        <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-[#62CDFF]">Services</p>
                        <p className="text-gray-500 font-bold">Here are the services I can provide you.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 justify-center items-center gap-8 py-8">
                    <div className='flex flex-col justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer  duration-500 h-60  border-b-4 border-[#62CDFF]'>
                        <img className=' w-60 mx-auto' src={Webdev} alt ='Web Development'  />
                       
                        <p className='my-4 font-bold text-gray-300'>Web Development</p>
                    </div>
                    <div className='flex flex-col h-60 shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer  duration-500 justify-center items-center border-b-4 border-[#62CDFF] '>
                        <div>
                        <img className=' w-60 mx-auto' src={Mobile} alt ='Mobile App Development object-contain'  />
                        </div>
                        <p className='my-4 font-bold text-gray-300'>Mobile App Development</p>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Service;
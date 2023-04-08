import React from 'react';

const Contact = ()=> {
    return(
        <div name= "contact" className='w-full  bg-[#0a192f] flex justify-center items-center p-8'>
            <form action="" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 my-8'>
                  <p className="text-4xl font-bold inline border-b-4 border-[#62CDFF] text-gray-300 ">Contact Me</p>    
                </div>
                <label className="text-gray-500 font-bold text-2xl" name="name">Name</label>
                <input  className="my-4 p-2 bg-[#ccd6f6] rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500" type="text" placeholder="name" name="name"/>
                <label className="text-gray-500 font-bold text-2xl" name="email">Email</label>
                <input  className="my-4 p-2 bg-[#ccd6f6] rounded-md focus:border-[#62CDFF] focus:outline-none" type="email" placeholder="E-mail" name="email"/>
                <label className="text-gray-500 font-bold text-2xl" name="message">Message</label>
                <textarea rows="10" placeholder="Write your message here" name="message" className="bg-[#ccd6f6] p-4 my-2 focus:outline-none"/>
                <button type="submit" className="bg-[#62CDFF] text-gray-300 p-2 border-1 border-[#62CDFF] rounded-sm 
                hover:bg-gray-300 hover:text-[#62CDFF] " >Send Message</button>
            </form>
            
        </div>
    )
}


export default Contact;
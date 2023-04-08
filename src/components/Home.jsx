import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import mypic from '../assets/image.jpg';
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className=''>
      
        <div className="main-info h-screen p-8  flex flex-col justify-center items-center  bg-[#0a192f] pt-[80px]">
            <img className='image border-[#0a192f] border-3 mb-4' 
            src = {mypic} alt='Nageso Haile'/>
            <h1 className='text-4xl pb-4 mb-4'>Nageso Haile</h1>
              <div className="photo flex flex-col justify-center items-center">

               <Typed 
                className='typed-text'
                strings={["Fullstack Developer","Web Developer","Mobile App Developer"]}
                typeSpeed={120}
                backSpeed={60}
                loop
            />
          </div>
             <button  className=' flex items-center text-gray-300 px-4 py-3 border-2 border-[#62CDFF] rounded-md m-5  hover:bg-[#62CDFF] hover:text-gray-50'> Contact Me <span> <HiArrowNarrowRight className='text-2xl group-hover:rotate-90 duration-300'/> </span></button>
            
        </div>
       
    </div>
  )
}

export default Home;

import React from 'react';
import HTML from '../assets/html.png';
import CSS from  '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Java from '../assets/java.png';
import Python from '../assets/python.jpg';
import Flutter from '../assets/flutter.png';
import Django from '../assets/django.png';
import ReactLogo from '../assets/react.png';
import MySql from '../assets/mysql.png';
import CPP from '../assets/cpp.png';

const Skill = () => {
    return(
        <div name="skills" className='bg-[#0a192f] h-screen py-8 '>
            <div class='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-3xl text-gray-300 py-4 font-bold inline border-b-4 border-[#62CDFF]'>Skills</p>
                    <p className='font-bold text-gray-300 p-4'>These are the technologies I have worked with.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center '>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt ='html'  />
                        <p className='my-4 font-bold text-gray-300'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer  duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt ='html'  />
                        <p className='my-4 font-bold text-gray-300'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:cursor-pointer duration-500'>
                        <img className='w-20 mx-auto' src={Javascript} alt ='html'  />
                        <p className='my-4 font-bold text-gray-300'>Javascript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img className='w-20 mx-auto' src={Java} alt ='html'  />
                        <p className='my-4 font-bold text-gray-300'>Java</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt ='html'  />
                        <p className='my-4 font-bold text-gray-300'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img className='w-20 mx-auto' src={ReactLogo} alt ='html'  />
                        <p className='my-4 font-bold text-gray-300'>React/React Native</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img className='w-20 mx-auto' src={Django} alt ='html'  />
                        <p className='my-4 font-bold text-gray-300'>Django</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img className='w-20 mx-auto' src={Flutter} alt ='html'  />
                        <p className='my-4 font-bold text-gray-300'>Flutter</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img className='w-20 mx-auto' src={MySql} alt ='html'  />
                        <p className='my-4 font-bold text-gray-300'>MySQLi</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img className='w-20 mx-auto' src={CPP} alt ='html'  />
                        <p className='my-4 font-bold text-gray-300'>C++</p>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default Skill;
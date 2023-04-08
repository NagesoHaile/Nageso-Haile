import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center bg-[#0a192f]  text-gray-300'>
         <div className='flex flex-col items-center'>
            <h1 className='text-2xl border-[#62CDFF] border-b-2 pb-2'>ABOUT ME</h1>
            <p>Software Developer</p>
         </div>
       <div className="grid lg:grid-cols-2 gap-1 p-8">
        <div className='flex flex-col jusfify-center items-center'>
             
            <h1 className='text-2xl font-bold'>Hi, Welcome to my  website! </h1>
            <h1 className='text-3xl font-bold'>  My name is <a>Nagesso Haile</a>. </h1>
        </div>
        <div>
         <p className="my-2">
                 I am a passionate full stack developer with expertise in both web and mobile app development. With a degree in computer science, I have a strong foundation in programming and a natural inclination towards technology.
                My love for technology is what drives me to constantly learn and adapt to new developments in the field. As a fast learner, I am always eager to take on new challenges and explore new ways to solve problems. This is what keeps me motivated and engaged in my work, and allows me to deliver high-quality solutions that meet my clients' needs.
                </p>
                <p className="my-2">
                One of my greatest strengths is my ability to solve problems. Whether it's a coding challenge or a complex software requirement, I enjoy the process of breaking down problems and finding innovative solutions. This mindset allows me to approach each project with a fresh perspective and tackle even the most daunting tasks with confidence.
                </p>
                <p className="my-2">
                In my career as a full stack developer, I have worked on a wide range of projects spanning various industries. I have experience in developing custom solutions that meet the unique needs of my clients. With a focus on clean code and efficient performance, I am committed to delivering reliable and scalable software that exceeds expectations.

                Thank you for taking the time to learn more about me. I am excited to connect with you and discuss how I can help bring your next project to life.
                </p>
         </div>
        </div>
    </div>
  )
}

export default About;

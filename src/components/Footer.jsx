import React from 'react';

const Footer = ()=> {
    return (
        <div className='flex flex-col sm:flex justify-between items-center p-8 bg-[#0a192f] border-t-2 border-[#62CDFF]' >
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
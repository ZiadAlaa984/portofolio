import React from 'react';
import logo from '../../assets/images1 (2).svg'; // Ensure the path is correct

export default function Home() {
    return (
        <>
            <div className="home w-full bg-[#1abc9c] flex justify-center items-center flex-col">
                <div className='text-center  flex justify-center items-center flex-col gap-10 '>
                    <img src={logo} alt="image" className='w-[250px]' />
                    <div>
                        <h1 className='self-center border-b-4 p-3 border-white  border-0 text-2xl lg:text-5xl font-bold whitespace-nowrap text-white'>START FRAMEWORK</h1>
                        <h4 className='text-white mt-1'>Graphic Artist - Web Designer - Illustrator</h4>
                    </div>
                </div>
            </div>
        </>
    );
}
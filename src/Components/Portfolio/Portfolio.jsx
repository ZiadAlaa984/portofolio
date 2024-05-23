import React from 'react'
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
export default function Portfolio() {
    return (
        <>
            <>
                <div class="  justify-center items-center   bg-white flex  flex-col w-full"><div class="conatainer md:w-[600px] lg:w-full mx-auto gap-12 flex-col flex p-5 ">
                    <div className="special_title mt-7 w-full relative text-center">
                        <h1 className='md:text-3xl text-xl lg:text-5xl text-nowrap mx-auto w-fit relative pb-5 mb-4 font-bold before:bg-[#2c3e50] before:w-full before:absolute before:left-0 before:bottom-0 before:h-[6px] text-[#2c3e50]'>PORTFOLIO COMPONENT</h1>
                    </div>
                    <div className=" max-w-screen-xl  mx-auto p-5 grid grid-cols-3 gap-12 z-20">
                        <div className=" col-span-3 md:col-span-1/2 lg:col-span-1   cursor-pointer rounded-lg overflow-hidden bg-black w-full">
                            <div className="inner relative w-full">
                                <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                                <img src={img1} className='w-full' alt="" />
                            </div>
                        </div>
                        <div className=" col-span-3 md:col-span-1/2 lg:col-span-1  cursor-pointer rounded-lg overflow-hidden bg-black w-full">
                            <div className="inner relative w-full">
                                <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                                <img src={img2} className='w-full' alt="" />
                            </div>
                        </div>
                        <div className=" col-span-3 md:col-span-1/2 lg:col-span-1  cursor-pointer rounded-lg overflow-hidden bg-black w-full">
                            <div className="inner relative w-full">
                                <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                                <img src={img3} className='w-full' alt="" />
                            </div>
                        </div>
                        <div className=" col-span-3 md:col-span-1/2 lg:col-span-1   cursor-pointer rounded-lg overflow-hidden bg-black w-full">
                            <div className="inner relative w-full">
                                <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                                <img src={img1} className='w-full' alt="" />
                            </div>
                        </div>
                        <div className=" col-span-3 md:col-span-1/2 lg:col-span-1  cursor-pointer rounded-lg overflow-hidden bg-black w-full">
                            <div className="inner relative w-full">
                                <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                                <img src={img2} className='w-full' alt="" />
                            </div>
                        </div>
                        <div className=" col-span-3 md:col-span-1/2 lg:col-span-1  cursor-pointer rounded-lg overflow-hidden bg-black w-full">
                            <div className="inner relative w-full">
                                <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                                <img src={img3} className='w-full' alt="" />
                            </div>
                        </div>


                    </div>
                </div>
                </div>
            </>
        </>
    )
}

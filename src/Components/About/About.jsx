import React from 'react'

export default function About() {
    return (
        <>
            <div className="About sm:px-8  mx-auto w-full  bg-[#1abc9c] flex justify-center items-center flex-col">
                <div className='text-center   container  flex justify-center items-center flex-col gap-10 '>
                    <div className='flex gap-8 flex-col'>
                        <h1 className='self-center border-b-4 p-3 w-fit mx-auto border-white  border-0 text-2xl lg:text-5xl font-bold whitespace-nowrap text-white'>ABOUT COMPONENT</h1>
                        <div className='flex max-w-screen-xl text-white md:flex-row flex-col justify-between items-center'>
                            <h4 className='p-5' >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h4>
                            <h4 className='p-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

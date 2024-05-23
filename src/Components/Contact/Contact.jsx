import React from 'react'

export default function Contact() {
    return (
        <>
            <div class="max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl contact  mx-auto  justify-center items-center   flex  flex-col w-full">
                <div className="special_title mt-7  w-full relative text-center">
                    <h1 className='text-2xl  lg:text-5xl text-nowrap mx-auto w-fit relative pb-5 mb-4 font-bold before:bg-[#2c3e50] before:w-full before:absolute before:left-0 before:bottom-0 before:h-[6px] text-[#2c3e50]'>CONATCT SECTION</h1>
                </div>
                <form class="w-full lg:mt-8 p-7  ">
                    <div class="relative mx-auto  z-0 max-w-screen-sm md:max-w-screen-md  mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" class="block   py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#2c3e50] focus:outline-none focus:ring-0 focus:border-[#2c3e50] peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#2c3e50] peer-focus:dark:text-[#2c3e50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
                    </div>
                    <div class="relative mx-auto  z-0 max-w-screen-sm md:max-w-screen-md  mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" class="block   py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#2c3e50] focus:outline-none focus:ring-0 focus:border-[#2c3e50] peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#2c3e50] peer-focus:dark:text-[#2c3e50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
                    </div>
                    <div class="relative mx-auto  z-0 max-w-screen-sm md:max-w-screen-md  mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" class="block   py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#2c3e50] focus:outline-none focus:ring-0 focus:border-[#2c3e50] peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#2c3e50] peer-focus:dark:text-[#2c3e50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>

                    </div>
                    <div class="relative mx-auto  z-0 max-w-screen-sm md:max-w-screen-md  mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" class="block   py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#2c3e50] focus:outline-none focus:ring-0 focus:border-[#2c3e50] peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#2c3e50] peer-focus:dark:text-[#2c3e50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword :</label>
                    </div>
                    <div className='mx-auto  z-0 max-w-screen-sm md:max-w-screen-md '>
                        <button type="button" class="text-white  bg-gray-500 hover:bg-gray-500 focus:outline-none focus:ring-4  font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-gray-500 dark:focus:ring-green-800">sendMessage</button>

                    </div>

                </form>
            </div>
        </>
    )
}

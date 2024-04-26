import Navbar from '@/components/Navbar'

import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "LIVID",
  description: "Video calling app",
  icons:{
    icon:'/icons/livid-icon.svg'
  }
};

const HomeLayout = ({children}:{children: ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar/>

        <div className="flex">
            <Sidebar/>

            <section className="flex min-h-screen flex-1 flex-col px-6 pt-28 max-md:pb-14 sm:px-14">
                <div className="w-full">
                    {children}
                </div>
                <div className='flex justify-end pt-6 pb-2'>
                  <p className=" text-white">Created By</p> &nbsp;
                  <a href="https://reevdsouza.vercel.app/" className='text-white underline'>Reev Dsouza</a>
                </div>
            </section>
        </div>
        {/* Footer */}
    </main>
  )
}

export default HomeLayout
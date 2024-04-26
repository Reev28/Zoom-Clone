import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "LIVID",
  description: "Video calling app",
  icons:{
    icon:'/icons/livid-icon.svg'
  }
};

const RootLayout = ({children}:{children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}  
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
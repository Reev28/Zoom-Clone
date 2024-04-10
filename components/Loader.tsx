import Image from '@/node_modules/next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex-center h-screen w-full'>
        <Image src='/icons/loading-circle.svg' alt='loaging' width={50} height={50}/>
    </div>
  )
}

export default Loader
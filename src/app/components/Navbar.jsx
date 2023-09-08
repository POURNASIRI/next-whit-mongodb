import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className=' shadow-lg p-4 flex justify-between items-center'>
        <div>
            <Link href={'/'} className='text-2xl font-bold'>
                Home
            </Link>
        </div>
        <button className='bg-neutral-500 hover:bg-green-700 hover:text-white transition-colors p-2 rounded-md '>
            <Link href={'/addnewtopic'}>
                ADD NEW TOPIC
            </Link>
        </button>
    </div>
  )
}

'use client'


import React, { useState } from 'react'
import {useRouter} from 'next/navigation'

export default function RemoveTopic({id}) {

        const router = useRouter()
        

   const handleDelte = async () =>{

        const confirmed = confirm("Are you sare?")
       

        if(confirmed){
           const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
            method:'DELETE'
           })


           if(res.ok){

              router.refresh();
           }
        }

    }

  return (
    <button onClick={handleDelte} className='bg-red-800 text-white p-1 rounded-md hover:bg-red-600'>
        Remove
    </button>
  )
}

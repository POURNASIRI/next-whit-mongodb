
'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Modal from '../components/Modal'

export default function AddNewTopic() {

      const[title,setTitle]= useState("")
      const[desc,setDesc]= useState("")
      const [error, setError] = useState(false)
     const router = useRouter()

      const handleSubmit = async(e)=>{

        e.preventDefault();

        if(!title || !desc){
          
           
           return ""
        }

        try {
          const res = await fetch("/api/topics/",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({title,desc})
          })

          if(res.ok){
              router.push("/")
          }else{
            throw new Error("Failed to create a Topic!")
          }
          
        } catch (error) {
          console.log(error)
        }



           
        
      }


  return (
    <div onClick={(e)=>setError(false)}>
      {
        (error && <Modal/>)
      }
    <form onSubmit={handleSubmit} className='flex flex-col w-full'>
        <input onChange={(e) => setTitle(e.target.value)} value={title} className='w-full bg-slate-100 mt-3 min-h-[60px] focus:border-b-2 focus:border-blue-500 rounded-md p-2 outline-none shadow-md' type="text" placeholder='Topic title' />
        <input onChange={(e)=>setDesc(e.target.value)} value={desc} className='w-full bg-slate-100 mt-3 min-h-[60px] p-2 outline-none shadow-md focus:border-b-2 focus:border-blue-500 rounded-md' type="text" placeholder='Topic description' />
        <button className='bg-green-800 hover:bg-green-600 transition-colors mt-5 p-2 w-[20%] rounded-xl text-white text-xl capitalize '  type='submit'> add topic</button>
    </form>
    </div>
  )
}

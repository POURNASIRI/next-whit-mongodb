
"use client"



import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function EditTopics({title,desc,id}) {

  const[newTitle,setNewTitle] = useState(title)
  const[newDesc,setNewDesc] = useState(desc)
  const route = useRouter()


  const handleSubmit = async (e) =>{
    e.preventDefault()

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method:'PUT',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({newTitle,newDesc}),
      })

      if(!res.ok){
        throw new Error(" Failed to update Topic")
      }
      route.refresh()
      route.push("/")

    } catch (error) {
      console.log(error)
    }
}

  return (
    <form onSubmit={handleSubmit}  className='flex flex-col w-full'>
    <input onChange={(e) =>setNewTitle(e.target.value)}  value={newTitle} className='w-full bg-slate-100 mt-1 min-h-[60px] p-2' type="text" placeholder='Topic title' />
    <input  onChange={(e) =>setNewDesc(e.target.value)}  value={newDesc} className='w-full bg-slate-100 mt-1 min-h-[60px] p-2' type="text" placeholder='Topic description' />
    <button className='bg-green-400 mt-5 p-2'  type='submit'> Update topic</button>
</form>
  )
}

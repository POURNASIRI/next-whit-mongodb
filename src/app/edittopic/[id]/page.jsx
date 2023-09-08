import EditTopics from '@/app/components/EditTopics'
import React from 'react'

const getData = async (id)=>{
        const apiUrl = process.env.API_URL
    try {
      const res = await fetch(`${apiUrl}/api/topics/${id}`,{cache:"no-store"})
      

      if(!res.ok){
        throw new Error("get data faield!")
      }

      return res.json()

    } catch (error) {
      console.log(error)
    }
}

export default async function EditTopic({ params }) {

      const { id } = params

      const {topic} = await getData(id)

      const{title, desc} = topic

  return (
    <div>
      <EditTopics title = {title} desc = {desc} id={id}/>
    </div>
  )
}

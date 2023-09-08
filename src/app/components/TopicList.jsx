
import RemoveTopic from './RemoveTopic'
import Link from 'next/link'




const getData = async()=>{

  const apiUrl = process.env.API_URL
    try {
      const res = await fetch(`${apiUrl}/api/topics`,{cache:"no-store"})


      if(!res.ok){
        throw new Error("Get data failed!")
      }

      return res.json()

    } catch (error) {
      console.log(error)
    }
}

export default async function TopicList() {

        const data = await getData()

        
      
        
    

  return (
    <>
        {
          data?.map(({title, desc, _id}) =>(
            <div key={_id} className='flex justify-between bg-slate-100 mt-3 items-start p-3 rounded-lg border-b-2 shadow-md hover:border-b-blue-700 transition-colors'>
            <div>
            <h2 className='text-xl'>{title}</h2>
            <p>{desc}</p>
            </div>
            <div className=' flex gap-2'>
                <RemoveTopic id={_id}/>
                <Link className='bg-green-800 text-white p-1 rounded-md hover:bg-green-600' href={`/edittopic/${_id}`}>
                    Edit
                </Link>
            </div>
        </div>
          ))
        }


    </>
  )
}

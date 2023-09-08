
import { NextResponse } from "next/server";
import connect from "../../../../../lib/mongoConection";
import Topic from "../../../../../models/Topic";


export async function PUT (request,{params}){

    await connect()
    const { id } = params

    const{newTitle:title,newDesc:desc} = await request.json()

    await Topic.findByIdAndUpdate(id,{title,desc});

    return NextResponse.json({message:"Topic has been Updated!"})
}


export async function GET (request, {params}){

    await connect()
    const { id } = params

    const topic =  await Topic.findOne({_id: id})
    return NextResponse.json({topic},{status:200})

}
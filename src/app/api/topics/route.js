import { NextResponse } from "next/server";
import connect from "../../../../lib/mongoConection"
import Topic from "../../../../models/Topic"



export  async function POST (request){

    const {title,desc} = await request.json()

    await connect()
    
    await Topic.create({title,desc});

    return NextResponse.json({message:"Topic Created succssed!"}, {status:201})

}
export async function GET (request){

    await connect();

    const topic = await Topic.find()

    return NextResponse.json((topic),{status:200})
}


export async function DELETE (request) {

    const id = request.nextUrl.searchParams.get("id");

    await connect();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:"Topic has been deleted!"},{status:200})

}






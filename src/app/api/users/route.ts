import { NextResponse } from "next/server";

export function GET(request:any,response:any){
    return new NextResponse('Next js GET API')
}

export async function POST(request:any,response:any){
    let payload = await request.json()
    console.log(payload)
    return new NextResponse('Next js POST API')
}
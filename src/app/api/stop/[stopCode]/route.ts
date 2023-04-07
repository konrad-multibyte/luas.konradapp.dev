import axios from "axios"
import { NextRequest } from "next/server";

export async function GET(request: Request, { params }) {
    console.log(params.stopCode);
    const uri = `https://luasforecasts.rpa.ie/xml/get.ashx?action=forecast&stop=${params.stopCode}encrypt=false`
    try {
        const res = await axios.get(uri);
        
        console.log(res.data)
        return new Response(JSON.stringify(res.data));
    } catch (error) {
         return new Response();
    }
}
import axios from "axios"
import { NextRequest } from "next/server";

export async function GET(request: Request, { params }) {
    const uri = `https://luasforecasts.rpa.ie/xml/get.ashx?action=forecast&stop=${params.stopCode}encrypt=false`
    const res = await axios.get(uri);
    console.log(uri);
    console.log(res)
    return new Response().json();
}
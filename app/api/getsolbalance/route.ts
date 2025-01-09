import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { solanaDevnet } from "../constants";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export async function POST(req:NextRequest){
    const { publickey } = await req.json()
    const response = await axios.post(solanaDevnet , {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getBalance",
        "params": [`${publickey}`]
    })
    
    return NextResponse.json({
        balance: parseFloat(response.data.result.value)/LAMPORTS_PER_SOL
    })
}
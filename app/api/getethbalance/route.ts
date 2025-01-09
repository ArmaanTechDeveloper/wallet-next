import axios from "axios";
import { formatEther } from "ethers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const { publickey } = await req.json()

    const response = await axios.post("https://eth-sepolia.g.alchemy.com/v2/42KkGIbztI2javG6kfsiiPC5547UMGlf" , {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "eth_getBalance",
        "params": [`${publickey}`, "latest"]
    })
    
    const balanceEth = formatEther(response.data.result)
    return NextResponse.json({
        balance: balanceEth
    })
}
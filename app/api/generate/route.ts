import { generateMnemonic } from "bip39";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


export function GET(){
    const mnemonic = generateMnemonic();
    return NextResponse.json({
        mnemonic: mnemonic
    })
}
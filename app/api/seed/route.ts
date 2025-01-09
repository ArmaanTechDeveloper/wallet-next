import { mnemonicToSeedSync } from "bip39";
import { NextRequest, NextResponse } from "next/server";
import bs58 from "bs58"

export async function POST(req:NextRequest){
    const { mnemonic } = await req.json();
    const seed = mnemonicToSeedSync(mnemonic)
    const seedPharaseBase58 = bs58.encode(seed)
    return NextResponse.json({
        seed: seedPharaseBase58
    })
}
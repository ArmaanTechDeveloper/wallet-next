import { NextRequest, NextResponse } from "next/server";
import bs58 from "bs58"
import { HDNodeWallet } from "ethers";
import { Wallet } from "ethers";

export async function POST(req: NextRequest){
    const { seed , index } = await req.json();
    const seedPhrase = Buffer.from(bs58.decode(seed))

    const derivationPath = `m/44'/60'/${index}'/0'`

    const hdNode =  HDNodeWallet.fromSeed(seedPhrase)
    const child = hdNode.derivePath(derivationPath)

    const ethWallet = new Wallet(child.privateKey)
    return NextResponse.json({ ethPublicKey: ethWallet.address ,  ethSecret: child.privateKey})
}
import { NextRequest, NextResponse } from "next/server";
import bs58 from "bs58"
import { derivePath } from "ed25519-hd-key"
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

export async function POST(req:NextRequest){
    const {seed , index} = await req.json();

    const seedPhrase = bs58.decode(seed);
    const buffer = Buffer.from(seedPhrase)

    const derivationPath = `m/44'/501'/${index}'/0'`
    const derivedSeed = derivePath(derivationPath , buffer.toString('hex')).key

    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
    const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();

    //console.log("public key" , publicKey);
    //console.log("secret key" , bs58.encode(secret))

    return NextResponse.json({ 
        solPublicKey: publicKey,
        solSecret: bs58.encode(secret)
    })
}
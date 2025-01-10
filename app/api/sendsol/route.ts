import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram } from "@solana/web3.js";
import { NextRequest, NextResponse } from "next/server";
import bs58 from "bs58"
import { Transaction } from "@solana/web3.js";
import { unstable_noStore as noStore } from "next/cache";


export async function POST(req: NextRequest) {
    noStore()
    const { toPublicKey, fromPublicKey, fromPrivateKey, sol } = await req.json()
    try {
        const connection = new Connection('https://api.devnet.solana.com/', 'confirmed')
        const sender = Keypair.fromSecretKey(bs58.decode(fromPrivateKey))
        const toPubKey = new PublicKey(toPublicKey)

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: sender.publicKey,
                toPubkey: toPubKey,
                lamports: sol * LAMPORTS_PER_SOL
            })
        )

        const { blockhash } = await connection.getLatestBlockhash('finalized')
        transaction.recentBlockhash = blockhash
        transaction.feePayer = sender.publicKey
        transaction.sign(sender)

        const signature = await sendAndConfirmTransaction(connection, transaction, [sender], {
            skipPreflight: false,
            commitment: 'confirmed',
            preflightCommitment: 'confirmed',
        })

        return NextResponse.json({ signature } , {status: 200})
    } catch (err) {
        console.error(err)
        return NextResponse.json({error: 'Internal server error'} , {status: 500})
    }
}
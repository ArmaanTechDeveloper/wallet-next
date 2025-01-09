import { Connection } from "@solana/web3.js"

export const solanaDevnet = "https://solana-devnet.g.alchemy.com/v2/42KkGIbztI2javG6kfsiiPC5547UMGlf"
export const solanaDevnetConnection = new Connection(solanaDevnet , 'confirmed')
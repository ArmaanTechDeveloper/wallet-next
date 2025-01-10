import { generateMnemonic } from "bip39";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export function GET() {
    const mnemonic = generateMnemonic();
    noStore()
    // Create a response and add no-cache headers
    const response = NextResponse.json({
      mnemonic: mnemonic,
    });
  
    return response;
  }
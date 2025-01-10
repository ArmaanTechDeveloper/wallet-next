import { generateMnemonic } from "bip39";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


export function GET() {
    const mnemonic = generateMnemonic();
  
    // Create a response and add no-cache headers
    const response = NextResponse.json({
      mnemonic: mnemonic,
    });
  
    // Set cache-control headers
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    response.headers.set("Surrogate-Control", "no-store");
  
    return response;
  }
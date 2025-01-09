"use client";

import { network } from "@/app/atoms"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil"

const Network = () => {
    const router = useRouter();
    const setNetwork = useSetRecoilState(network)

    function naigateToSeedPhrase() {
        router.push("/onboarding/seed")
    }
    return (
        <div>
            <h1 className="text-6xl">Select a network 🚀</h1>
            <div>
                <Button className="w-full my-4 text-xl p-6" onClick={() => {
                    naigateToSeedPhrase()
                    setNetwork("solana")
                }}>Solana</Button>
                <Button className="w-full mb-4 text-xl p-6" onClick={() => {
                    naigateToSeedPhrase()
                    setNetwork("ethereum")
                }}>Ethereum</Button>
            </div>    
        </div>
    )
}

export default Network
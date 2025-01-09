"use client";

import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { onboarding } from "./atoms";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const setOnboard = useSetRecoilState(onboarding)
  const router = useRouter()

  useEffect(() => {
    const LocalDB =  localStorage.getItem('seed')
    if(LocalDB) {
      setOnboard(false)
      router.push("/dashboard")
    }
    else{
      setOnboard(true)
      router.push("/onboarding/network")
    }
  },[])

  return (
    <div></div>
  );
}

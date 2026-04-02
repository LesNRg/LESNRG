"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EmailGame() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/thegame?utm_source=email&utm_campaign=win_bdtest");
  }, [router]);
  return null;
}

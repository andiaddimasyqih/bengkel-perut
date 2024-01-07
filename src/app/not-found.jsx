'use client';

import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="h-dvh flex flex-col justify-center items-center gap-5">
      <h2 className="font-bold text-4xl">HALAMAN TIDAK DITEMUKAN!</h2>
      <button className="underline hover:text-[#BE100F] transition-all duration-150" onClick={() => router.back()}>Kembali</button>
    </div>
  )
}
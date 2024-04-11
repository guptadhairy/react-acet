import React from 'react'
import { MaskContainer } from "./ui/svg-mask-effect";
const Masking = () => {
  return (
    <div className="h-[40rem] bg-black w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            The first rule of MRR Club is you do not talk about MRR Club. The
            second rule of MRR Club is you DO NOT talk about MRR Club.
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        The second rule of <span className="text-red-500">MRR Club</span> is you
        do not talk about MRR Club. The second rule of MRR Club is you DO NOT
        talk about <span className="text-red-500">MRR Club</span>.
      </MaskContainer>
    </div>
  )
}

export default Masking
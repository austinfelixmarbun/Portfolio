"use client"
import React, { useEffect, useState } from 'react';
import { TextHoverEffect } from './ui/Text-hover';

const formatTime = () => new Date().toLocaleTimeString();

export default function Footer(): React.ReactElement{
  const [timeNow, setTimeNow] = useState<string>("");

  useEffect(()=>{
    const initialId =window.setTimeout(()=>setTimeNow(formatTime()), 0);
    const intervalId = window.setInterval(()=>setTimeNow(formatTime()), 1000)
    return()=>{
      window.clearTimeout(initialId)
      window.clearInterval(intervalId)
    }
  },[])
  return (
    <footer className="relative z-20 w-full bg-zinc-950 border-t border-zinc-800 text-zinc-300 pb-12 md:pb-0">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-20 py-5">
        <div className='text-lg cursor-pointer'><a href="/contact">Reach out →</a></div>
        <TextHoverEffect text="AUSTIN" />
        <div className='text-lg'>{timeNow}</div>
      </div>
    </footer>
  );
}
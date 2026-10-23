"use client";
import { useState } from "react";

interface ImageSliderProps {
  images: string[];
  title: string;
}

export default function ImageSlider({ images, title }: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${title} ${i + 1}`}
            className="w-full shrink-0 object-cover"
          />
        ))}
      </div>

      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 h-15 w-11 rounded-full bg-black/40 text-white hover:bg-black/70 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            
          </button>
          <button
            onClick={next}
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 h-15 w-11 rounded-full bg-black/40 text-white hover:bg-black/70 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="bg-black/50 px-2 py-2 absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 rounded-full hover:bg-black/70">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-5 rounded-full ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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
    <div>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} ${i + 1}`}
          className="w-full"
        />
      ))}

      {total > 1 && (
        <>
          <button onClick={prev}>{'<'}</button>
          <button onClick={next}>{'>'}</button>
        </>
      )}
    </div>
  );
}


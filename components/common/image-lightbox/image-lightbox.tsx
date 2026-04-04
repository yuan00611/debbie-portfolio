"use client";

import { useState } from "react";
import Image from "next/image";

interface LightboxImage {
  src: string;
  alt: string;
  label?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
}

export function ImageLightbox({ images }: ImageLightboxProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setLightbox(img.src)}
            className="group relative aspect-video rounded-lg overflow-hidden border border-border text-left"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-top transition-transform duration-200 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium transition-opacity duration-200">
                Click to enlarge
              </span>
            </div>
            {img.label && (
              <span className="absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded bg-black/70 text-white">
                {img.label}
              </span>
            )}
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <Image
              src={lightbox}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-2xl font-light"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
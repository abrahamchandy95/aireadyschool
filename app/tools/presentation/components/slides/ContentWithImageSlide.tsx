"use client";

import { Slide } from "../../types/presentation";

interface ContentWithImageSlideProps {
  slide: Slide;
  theme: string;
}

export function ContentWithImageSlide({
  slide,
  theme,
}: ContentWithImageSlideProps) {
  const themeStyles = {
    modern: "bg-white text-gray-800",
    playful: "bg-pink-100 text-purple-900",
    nature: "bg-green-50 text-green-900",
    tech: "bg-gray-100 text-gray-900",
    vintage: "bg-amber-50 text-amber-900",
  };

  const bgStyle =
    themeStyles[theme as keyof typeof themeStyles] || themeStyles.modern;

  const isImageLeft = slide.order % 2 === 0;

  return (
    <div className={`min-h-[600px] ${bgStyle} flex items-center p-12`}>
      {isImageLeft && (
        <div className="flex-1 pr-8">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-6">{slide.title}</h2>
        <div className="text-xl space-y-4">
          <p>{slide.content}</p>
          {slide.bulletPoints && (
            <ul className="list-disc list-inside">
              {slide.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {!isImageLeft && (
        <div className="flex-1 pl-8">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

import { useState } from "react";

export default function Carousel(props) {
  const [curr, setCurr] = useState(0);
  const slides = [1, 2, 3, 4];
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <div
      className="relative pb-6 overflow-x-hidden overflow-y-visible"
      onClick={next}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {props.children}
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? "p-1" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

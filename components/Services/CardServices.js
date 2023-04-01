import { useState } from "react";
import ArrowDown from "../img/ArrowDown";

export default function CardServices(props) {
  const [down, setDown] = useState(false);
  return (
    <div
      className={`z-0 rounded-[20px] mb-6 transition-all px-[60px] bg-gray-50/70  flex space-x-10 ${
        down ? "pt-[54px] pb-[500px]" : "py-[54px]"
      }`}
    >
      <h3
        className={`text-4xl font-semibold transition-all ${
          down ? "text-primary-500" : "text-gray-700"
        }`}
      >
        {props.num}
      </h3>
      <div className="relative w-full">
        <div
          className="relative z-10 cursor-pointer"
          onClick={() => {
            setDown(!down);
          }}
        >
          <div className="flex items-center justify-between ">
            <h3
              className={`text-4xl font-semibold transition-all ${
                down ? "text-primary-500" : "text-gray-700"
              }`}
            >
              {props.children}
            </h3>
            <ArrowDown down={down} />
          </div>
        </div>
        <div
          className={`absolute w-full transition-all origin-top ${
            down ? "top-16 opacity-100" : "-top-full opacity-0"
          }`}
        >
          <p className="w-[700px] text-lg text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
            Ultricies nisl enim lacus id aliquam montes euismod urna sem.
          </p>
          <div className="w-full h-[327px] bg-[url('/image-1.png')] bg-cover rounded-[12px] mt-10"></div>
        </div>
      </div>
    </div>
  );
}

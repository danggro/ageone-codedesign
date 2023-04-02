import { useState } from "react";
import ArrowDown from "../img/ArrowDown";

export default function CardServices(props) {
  const [down, setDown] = useState(false);
  return (
    <div
      className={`z-0 rounded-[20px] mb-6 transition-all sm:px-[60px] px-6 bg-gray-50/70 flex items-start sm:space-x-10 space-x-3 ${
        down
          ? "sm:pt-[54px] pt-6 sm:pb-[500px] pb-[344px]"
          : "sm:py-[54px] py-6"
      }`}
    >
      <h3
        className={`sm:text-4xl sm:leading-10 text-xl font-semibold transition-all ${
          down ? "text-primary-500 " : "text-gray-700"
        }`}
      >
        {props.num}
      </h3>
      <div className="w-full ">
        <div
          className="relative z-10 cursor-pointer"
          onClick={() => {
            setDown(!down);
          }}
        >
          <div className="flex items-start justify-between ">
            <h3
              className={`sm:text-4xl text-xl sm:leading-10 font-semibold transition-all ${
                down ? "text-primary-500 " : "text-gray-700"
              }`}
            >
              {props.children}
            </h3>
            <ArrowDown down={down} />
          </div>
        </div>
        <div className="relative">
          <div
            className={`absolute w-full transition-all origin-top ${
              down ? "sm:top-  top-4 opacity-100" : "-top-full opacity-0"
            }`}
          >
            <p className="text-gray-600 sm:w-8/12 sm:pr-20 sm:text-lg text-md">
              Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
              Ultricies nisl enim lacus id aliquam montes euismod urna sem.
            </p>
            <div className="w-full sm:h-[327px] h-[160px] bg-[url('/image-1.png')] bg-cover rounded-[12px] sm:mt-10 mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

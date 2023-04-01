import React from "react";

function ArrowDown(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      className={`transition-all ${
        props.down ? "" : "text-[#454749] -rotate-90"
      }`}
    >
      <path
        fill={props.down ? `url(#paint0_linear_204_674)` : "currentColor"}
        d="M18.334 8.334V26.95L10.2 18.817a1.68 1.68 0 00-2.367 0c-.65.65-.65 1.7 0 2.35L18.817 32.15c.65.65 1.7.65 2.35 0l11-10.966c.65-.65.65-1.7 0-2.35a1.66 1.66 0 00-2.35 0l-8.15 8.116V8.334c0-.917-.75-1.667-1.667-1.667-.916 0-1.666.75-1.666 1.667z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_204_674"
          x1="7.346"
          x2="12.517"
          y1="32.638"
          y2="3.137"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00796D"></stop>
          <stop offset="1" stopColor="#38C682"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ArrowDown;

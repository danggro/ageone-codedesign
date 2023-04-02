import React from "react";

function NavIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      onClick={props.onClick}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 12.509h16M8 19.491h16"
      ></path>
      <rect
        width="31"
        height="31"
        x="0.5"
        y="0.5"
        stroke="#F3F3F3"
        rx="7.5"
      ></rect>
    </svg>
  );
}

export default NavIcon;

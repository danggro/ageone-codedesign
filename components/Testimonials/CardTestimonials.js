import Image from "next/image";
import { useEffect, useState } from "react";

export default function CardTestimonials(props) {
  const [screen, setScreen] = useState(null);
  useEffect(() => {
    setScreen(window.screen.width);
  }, []);

  return (
    <div className="p-6 mb-10 rounded-xl transition-all bg-gray-50/70 hover:bg-gradient-to-r hover:to-[#00796d] hover:from-[#38c682] group">
      <h5 className="text-gray-500 transition-all sm:text-xl text-md group-hover:text-white">
        {props.children}
      </h5>
      <div className="flex items-center mt-6 space-x-3">
        <Image
          width={screen < 640 ? "56" : "72"}
          height={screen < 640 ? "56" : "72"}
          alt=""
          src={props.img}
        />
        <div>
          <h5 className="font-semibold text-gray-900 transition-all sm:text-xl text-md group-hover:text-white">
            {props.username}
          </h5>
          <h5 className="mt-1 text-sm text-gray-500 transition-all group-hover:text-white sm:text-md">
            {props.job}
          </h5>
        </div>
      </div>
    </div>
  );
}

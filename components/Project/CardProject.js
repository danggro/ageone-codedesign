import Image from "next/image";
import SpecialIcon from "../img/SpecialIcon";

export default function CardProject(props) {
  return (
    <div className="sm:w-6/12 group cursor-pointer bg-gray-800 sm:rounded-[32px] p-4 rounded-[24px]">
      <div className="relative">
        <Image
          src={props.img}
          width="598"
          height="579"
          alt=""
          className="sm:rounded-[20px] rounded-[12px] transition-all group-hover:opacity-50"
        ></Image>
        <div className="absolute transition-all scale-0 group-hover:scale-50 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
          <SpecialIcon />
        </div>
      </div>

      <div>
        <h4 className="mt-4 mb-2 text-lg font-bold text-white sm:mt-6 sm:mb-3 sm:text-4xl">
          {props.title}
        </h4>
        <p className="text-gray-200 sm:pr-10 sm:text-xl text-md">
          {props.desc}
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";
import SpecialIcon from "../img/SpecialIcon";

export default function CardProject(props) {
  return (
    <div className="w-6/12 group cursor-pointer bg-gray-800 rounded-[32px] p-4">
      <div className="relative">
        <Image
          src={props.img}
          width="598"
          height="579"
          alt=""
          className="rounded-[20px] transition-all group-hover:opacity-50"
        ></Image>
        <div className="absolute transition-all scale-0 group-hover:scale-100 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
          <SpecialIcon />
        </div>
      </div>

      <div>
        <h4 className="mt-6 mb-3 text-4xl font-bold text-white">
          {props.title}
        </h4>
        <p className="pr-10 text-xl text-gray-100">{props.desc}</p>
      </div>
    </div>
  );
}

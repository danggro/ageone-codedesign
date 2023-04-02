import Image from "next/image";

export default function CardTestimonials(props) {
  return (
    <div className="p-6 mb-10 rounded-xl transition-all bg-gray-50/70 hover:bg-gradient-to-r hover:to-[#00796d] hover:from-[#38c682] group">
      <h5 className="text-xl text-gray-500 transition-all group-hover:text-white">
        {props.children}
      </h5>
      <div className="flex items-center mt-6 space-x-3">
        <Image width="72" height="72" alt="" src={props.img} />
        <div>
          <h5 className="text-xl font-semibold text-gray-900 transition-all group-hover:text-white">
            {props.username}
          </h5>
          <h5 className="mt-1 text-gray-500 transition-all group-hover:text-white text-md">
            {props.job}
          </h5>
        </div>
      </div>
    </div>
  );
}

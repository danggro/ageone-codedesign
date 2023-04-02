export default function CtgProject(props) {
  const variants = {
    desktop: "px-6 py-4 text-md",
    mobile: "px-4 py-2 text-sm",
  };
  const addVariant = variants[props.variant];
  return (
    <li
      className={` transition-all  hover:bg-gradient-to-r hover:to-[#00796d] hover:from-[#38c682] font-medium text-gray-500 rounded-full cursor-pointer hover:text-white ${addVariant}  ${
        props.def && "bg-gradient-to-r to-[#00796d] from-[#38c682] text-white"
      }`}
      onClick={(e) => {
        const ctg = Array.from(
          document.getElementsByClassName("ctg")[0].children
        );
        ctg.forEach((c) => {
          c.classList.remove(
            "bg-gradient-to-r",
            "to-[#00796d]",
            "from-[#38c682]",
            "text-white"
          );
        });
        e.target.classList.add(
          "bg-gradient-to-r",
          "to-[#00796d]",
          "from-[#38c682]",
          "text-white"
        );
      }}
    >
      {props.children}
    </li>
  );
}

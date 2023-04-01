export default function BannerItem(props) {
  return (
    <div className="flex flex-col items-center w-4/12">
      {props.icon}
      <span className="text-2xl font-medium text-white mt-[10px]">
        {props.children}
      </span>
    </div>
  );
}

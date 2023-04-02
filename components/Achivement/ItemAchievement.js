export default function ItemAchievement(props) {
  return (
    <div className="text-center sm:w-4/12 ">
      <h1 className="sm:leading-[76px] leading-[52px] -tracking-[0.02em] font-bold text-white sm:text-display-lg text-display-sm">
        {props.children}
        {`+`}
      </h1>
      <h4 className="mt-2 font-medium text-white sm:mt-3 sm:text-2xl text-md">
        {props.title}
      </h4>
    </div>
  );
}

export default function ItemAchievement(props) {
  return (
    <div className="w-4/12 text-center ">
      <h1 className="leading-[76px] -tracking-[0.02em] font-bold text-white text-display-lg">
        {props.children}
        {`+`}
      </h1>
      <h4 className="mt-3 text-2xl font-medium text-white">{props.title}</h4>
    </div>
  );
}

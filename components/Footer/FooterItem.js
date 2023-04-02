export default function FooterItem(props) {
  return (
    <div className="w-6/12 mt-6 sm:w-auto sm:mt-0">
      <h5 className="mb-1 text-sm font-bold text-white sm:mb-2 sm:text-lg">
        {props.title}
      </h5>
      <ul>{props.children}</ul>
    </div>
  );
}

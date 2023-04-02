export default function FooterItem(props) {
  return (
    <div>
      <h5 className="mb-2 text-lg font-bold text-white">{props.title}</h5>
      <ul>{props.children}</ul>
    </div>
  );
}

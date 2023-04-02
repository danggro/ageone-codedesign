import Link from "next/link";

export default function FooterItemLink(props) {
  return (
    <li className="mt-4">
      <Link href={props.href} className="text-lg text-gray-200 hover:underline">
        {props.children}
      </Link>
    </li>
  );
}

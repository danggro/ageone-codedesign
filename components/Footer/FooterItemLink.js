import Link from "next/link";

export default function FooterItemLink(props) {
  return (
    <li className="mt-3 sm:mt-4">
      <Link
        href={props.href}
        className="text-sm text-gray-200 sm:text-lg hover:underline"
      >
        {props.children}
      </Link>
    </li>
  );
}

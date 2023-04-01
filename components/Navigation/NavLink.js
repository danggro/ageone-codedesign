import Link from "next/link";

export default function NavLink() {
  return (
    <ul className="flex items-start font-medium space-x-[60px] text-white">
      <Link href="/#Home" className="relative text-lg group">
        <li>Home</li>
        <div className="group-hover:scale-100 transition-all scale-0 absolute left-[50%] -translate-x-[50%] -bottom-1 w-7 h-[2px] bg-primary-500"></div>
      </Link>
      <Link className="relative text-lg group" href="/#Services">
        <li>Services</li>
        <div className="group-hover:scale-100 transition-all scale-0 absolute left-[50%] -translate-x-[50%] -bottom-1 w-9 h-[2px] bg-primary-500"></div>
      </Link>
      <Link className="relative text-lg group" href="/#Project">
        <li>Project</li>
        <div className="group-hover:scale-100 transition-all scale-0 absolute left-[50%] -translate-x-[50%] -bottom-1 w-9 h-[2px] bg-primary-500"></div>
      </Link>
      <Link className="relative text-lg group" href="/#About">
        <li>About</li>
        <div className="group-hover:scale-100 transition-all scale-0 absolute left-[50%] -translate-x-[50%] -bottom-1 w-8 h-[2px] bg-primary-500"></div>
      </Link>
    </ul>
  );
}

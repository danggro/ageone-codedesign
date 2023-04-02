export default function NavLink() {
  return (
    <ul className="flex absolute top-14 left-14 sm:top-0 sm:left-0 sm:relative sm:flex-row flex-col items-start font-medium sm:space-x-[60px] space-y-6 sm:space-y-0 text-white">
      <a href="#Home" className="relative text-lg group">
        <li>Home</li>
        <div className="group-hover:scale-100 transition-all scale-0 absolute left-[50%] -translate-x-[50%] -bottom-1 w-7 h-[2px] bg-white sm:bg-primary-500"></div>
      </a>
      <a className="relative text-lg group" href="#Services">
        <li>Services</li>
        <div className="group-hover:scale-100 transition-all scale-0 absolute left-[50%] -translate-x-[50%] -bottom-1 w-9 h-[2px] bg-white sm:bg-primary-500"></div>
      </a>
      <a className="relative text-lg group" href="#Project">
        <li>Project</li>
        <div className="group-hover:scale-100 transition-all scale-0 absolute left-[50%] -translate-x-[50%] -bottom-1 w-9 h-[2px] bg-white sm:bg-primary-500"></div>
      </a>
      <a className="relative text-lg group" href="#About">
        <li>About</li>
        <div className="group-hover:scale-100 transition-all scale-0 absolute left-[50%] -translate-x-[50%] -bottom-1 w-8 h-[2px] bg-white sm:bg-primary-500"></div>
      </a>
    </ul>
  );
}

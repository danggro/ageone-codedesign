import { useState } from "react";
import Container from "../Container";
import NavIcon from "../img/NavIcon";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavLogoMobile from "./NavLogoMobile";
import NavRight from "./NavRight";

export default function NavBar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <nav id="Home">
      <Container>
        <div className="sm:flex hidden items-center py-[19px] justify-between">
          <NavLogo />
          <NavLink />
          <NavRight />
        </div>
        <div className="flex items-center justify-between py-6 sm:hidden ">
          <NavLogoMobile />
          <NavIcon
            onClick={() => {
              setOffcanvas(!offcanvas);
            }}
          />
        </div>
      </Container>
      <div
        className={`fixed sm:hidden top-0 transition-all  z-50 w-screen h-screen bg-primary-500 ${
          offcanvas ? "right-0" : "-right-full"
        }`}
      >
        <NavLink />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="absolute text-white top-6 right-6 feather feather-x"
          viewBox="0 0 24 24"
          onClick={() => {
            setOffcanvas(!offcanvas);
          }}
        >
          <path d="M18 6L6 18"></path>
          <path d="M6 6L18 18"></path>
        </svg>
      </div>
    </nav>
  );
}

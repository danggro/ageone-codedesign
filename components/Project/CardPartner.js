import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CardPartner(props) {
  const [enter, setEnter] = useState(false);
  const [screen, setScreen] = useState(null);
  useEffect(() => {
    setScreen(window.screen.width);
  }, []);

  return (
    <Link href={props.href}>
      <Image
        alt=""
        src={enter ? props.color : props.gray}
        width={screen < 640 ? "140" : "160"}
        height={screen < 640 ? "140" : "160"}
        className="transition-all origin-left sm:scale-100 "
        onClick={(e) => {
          console.log(e);
        }}
        onPointerEnter={() => {
          setEnter(true);
        }}
        onPointerLeave={() => {
          setEnter(false);
        }}
      />
    </Link>
  );
}

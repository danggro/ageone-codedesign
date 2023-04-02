import Link from "next/link";
import Container from "../Container";
import Adobe from "@/public/Adobe.png";
import Airbnb from "@/public/Airbnb.png";
import Google from "@/public/Google.png";
import Microsoft from "@/public/Microsoft.png";
import Netflix from "@/public/Netflix.png";
import Slack from "@/public/Slack.png";
import Image from "next/image";

export default function PartnerProject() {
  return (
    <div className="w-full py-8 bg-gray-900 border-t">
      <Container>
        <div className="flex flex-wrap justify-between sm:flex-row">
          <Link href="">
            <Image
              alt=""
              src={Slack}
              className="sm:scale-100 origin-left scale-[88%]"
            />
          </Link>
          <Link href="">
            <Image
              alt=""
              src={Google}
              className="sm:scale-100 origin-right scale-[88%]"
            />
          </Link>
          <Link href="">
            <Image
              alt=""
              src={Netflix}
              className="sm:scale-100 origin-left scale-[88%]"
            />
          </Link>
          <Link href="">
            <Image
              alt=""
              src={Airbnb}
              className="sm:scale-100 origin-right scale-[88%]"
            />
          </Link>
          <Link href="">
            <Image
              alt=""
              src={Adobe}
              className="sm:scale-100 origin-left scale-[88%]"
            />
          </Link>
          <Link href="">
            <Image
              alt=""
              src={Microsoft}
              className="sm:scale-100 origin-right scale-[88%]"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}

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
        <div className="flex justify-between">
          <Link href="">
            <Image alt="" src={Slack} />
          </Link>
          <Link href="">
            <Image alt="" src={Google} />
          </Link>
          <Link href="">
            <Image alt="" src={Netflix} />
          </Link>
          <Link href="">
            <Image alt="" src={Airbnb} />
          </Link>
          <Link href="">
            <Image alt="" src={Adobe} />
          </Link>
          <Link href="">
            <Image alt="" src={Microsoft} />
          </Link>
        </div>
      </Container>
    </div>
  );
}

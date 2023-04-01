import Button from "../Button";
import Container from "../Container";
import Ornament1 from "../img/Ornament1";
import BannerItem from "./BannerItem";
import Attract from "./Item/Attract";
import Cost from "./Item/Cost";
import Expanding from "./Item/Expanding";
import Professional from "./Item/Professional";

export default function SectionHero() {
  return (
    <Container>
      <div className="w-9/12 mx-auto mt-[100px]">
        <div className="px-4 py-3 mx-auto mb-3 text-sm font-medium text-white rounded-full bg-white/10 w-fit">
          NUMBER ONE CREATIVE DIGITAL AGENCY
        </div>
        <h1 className="font-bold tracking-[-0.02em] leading-none text-center text-primary-500 text-display-lg">
          Smart Choices
        </h1>
        <h1 className="font-bold tracking-[-0.02em] leading-none text-center text-white text-display-lg mb-6">
          For Your Business Growth
        </h1>
        <h4 className="text-xl font-medium text-center text-gray-200">
          We're a team of experienced designers, developers, <br /> and
          marketers, passionate about delivering exceptional digital solutions.
        </h4>
        <div className="text-center mt-14">
          <Button variant="large" arrow>
            Contact Us
          </Button>
        </div>
      </div>

      <div className="bg-[url('/shape-hero-4.png')] bg-cover mt-20 w-full h-full pt-6 px-[60px] pb-[60px] rounded-[20px]">
        <h3 className="text-4xl font-semibold text-center text-white mb-11">
          Benefit of improving your business
        </h3>
        <div className="flex items-center">
          <BannerItem icon={<Expanding />}>Expanding the Market</BannerItem>
          <BannerItem icon={<Cost />}>Cost-Effective</BannerItem>
          <BannerItem icon={<Professional />}>More Professional</BannerItem>
          <BannerItem icon={<Attract />}>Attract Client</BannerItem>
        </div>
      </div>

      <div className="z-0 glow w-[650px] h-[650px] absolute -top-[325px] -left-[292px] "></div>
      <div className="z-0 glow w-[497px] h-[497px] absolute top-[735px] right-0 "></div>
    </Container>
  );
}

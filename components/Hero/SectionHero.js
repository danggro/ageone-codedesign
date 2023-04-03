import Button from "../Button";
import Carousel from "../Carousel";
import Container from "../Container";
import BannerItem from "./BannerItem";
import Attract from "./Item/Attract";
import Cost from "./Item/Cost";
import Expanding from "./Item/Expanding";
import ExpandingMobile from "./Item/ExpandingMobile";
import Professional from "./Item/Professional";

const slides = [
  {
    icon: <ExpandingMobile />,
    desc: "Expanding the Market",
  },
  {
    icon: <ExpandingMobile />,
    desc: "Cost-Effective",
  },
  {
    icon: <ExpandingMobile />,
    desc: "More Professional",
  },
  {
    icon: <ExpandingMobile />,
    desc: "Attract Client",
  },
];

export default function SectionHero() {
  return (
    <Container>
      <div className="sm:w-9/12 mx-auto sm:mt-[100px] mt-10">
        <div className="sm:px-4 sm:py-3 px-3 py-2 mx-auto sm:mb-3 mb-2 sm:text-sm text-[10px] tracking-[1px] font-medium text-white rounded-full bg-white/10 w-fit">
          NUMBER ONE CREATIVE DIGITAL AGENCY
        </div>
        <h1 className="font-bold tracking-[-0.02em] sm:leading-[76px] leading-[44px] text-center text-primary-500 sm:text-display-lg text-5xl">
          Smart Choices
        </h1>
        <h1 className="font-bold tracking-[-0.02em] sm:leading-[76px] leading-[44px] text-center text-white sm:text-display-lg sm:mb-6 mb-[14px] text-5xl">
          For Your Business Growth
        </h1>
        <h4 className="justify-center hidden text-xl font-medium text-center text-gray-200 sm:flex">
          We&apos;re a team of experienced designers, developers, <br /> and
          marketers, passionate about delivering exceptional digital solutions.
        </h4>
        <h4 className="text-sm font-medium text-center text-gray-200 sm:hidden">
          We&apos;re a team of experienced designers, developers, and marketers,
          passionate about delivering exceptional digital solutions.
        </h4>
        <div className="justify-center hidden sm:mt-14 sm:flex">
          <Button variant="large" arrow>
            Contact Us
          </Button>
        </div>
        <div className="mt-10 text-center sm:mt-14 sm:hidden">
          <Button variant="medium" arrow>
            Contact Us
          </Button>
        </div>
      </div>

      <div className="bg-[url('/shape-hero-4.png')] bg-cover mt-20 sm:block hidden w-full h-full pt-6 px-[60px] pb-[60px] rounded-[20px]">
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

      <div className="bg-[url('/shape-hero-mobile.png')] rounded-2xl backdrop-blur-[5px] bg-cover bg-no-repeat mt-14 pt-[15px] pb-[38px] sm:hidden">
        <h3 className="text-lg font-semibold text-center text-white mb-[31px]">
          Benefit of <br />
          improving your business
        </h3>
        <Carousel>
          {slides.map((m) => {
            return <BannerItem icon={m.icon}>{m.desc}</BannerItem>;
          })}
        </Carousel>
      </div>

      <div className="z-0 sm:block hidden glow w-[650px] h-[650px] absolute -top-[325px] -left-[292px] "></div>
      <div className="z-0 sm:block hidden glow w-[497px] h-[497px] absolute top-[735px] right-0 "></div>
    </Container>
  );
}

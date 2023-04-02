import Button from "../Button";
import Container from "../Container";
import CardProject from "./CardProject";
import CtgProject from "./CtgProject";

export default function SectionProject() {
  return (
    <section
      id="Project"
      className="sm:bg-[url('/sec-project.png')] bg-[url('/sec-project-mobile.png')] bg-cover sm:py-[100px] py-14 bg-gray-900"
    >
      <Container>
        <div className="mx-auto text-center sm:w-10/12 ">
          <h1 className="sm:text-display-lg text-5xl font-bold text-white -tracking-[0.02em] sm:leading-[76px] leading-[44px]">
            Our Project Have Been <span className="text-primary-500">Done</span>
          </h1>
          <h4 className="mt-4 mb-8 text-sm font-medium text-gray-200 sm:text-xl sm:px-20 sm:mt-6 sm:mb-14">
            Take a look at some of our recent projects and see how we&apos;ve
            helped other businesses elevate their brand and drive business
            growth.
          </h4>
          <ul className="items-center hidden p-2 mx-auto bg-white rounded-full ctg sm:flex w-fit">
            <CtgProject def variant="desktop">
              UI/UX Design
            </CtgProject>
            <CtgProject variant="desktop">Digital Marketing</CtgProject>
            <CtgProject variant="desktop">Sosmed Management</CtgProject>
            <CtgProject variant="desktop">Development</CtgProject>
          </ul>
          <ul className="flex items-center p-1 mx-auto bg-white rounded-full sm:hidden w-fit">
            <CtgProject def variant="mobile">
              UI/UX
            </CtgProject>
            <CtgProject variant="mobile">Digital</CtgProject>
            <CtgProject variant="mobile">SMM</CtgProject>
            <CtgProject variant="mobile">Dev</CtgProject>
          </ul>
        </div>
        <div className="flex flex-wrap mt-8 space-y-3 sm:mt-16 sm:space-y-0 sm:space-x-5 sm:flex-nowrap">
          <CardProject
            img="/project-1.png"
            title="Title"
            desc="We are designed to help your business thrive in the online world."
          />
          <CardProject
            img="/project-2.png"
            title="Title"
            desc="We are designed to help your business thrive in the online world."
          />
        </div>
      </Container>
    </section>
  );
}

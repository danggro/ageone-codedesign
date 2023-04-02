import Button from "../Button";
import Container from "../Container";
import CardProject from "./CardProject";

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
          <div className="items-center hidden p-2 mx-auto bg-white rounded-full sm:flex w-fit">
            <Button variant="medium">UI/UX Design</Button>
            <div className="px-6 font-medium text-gray-500 text-md">
              Digital Marketing
            </div>
            <div className="px-6 font-medium text-gray-500 text-md">
              Sosmed Management
            </div>
            <div className="px-6 font-medium text-gray-500 text-md">
              Development
            </div>
          </div>
          <div className="flex items-center p-1 mx-auto bg-white rounded-full sm:hidden w-fit">
            <Button variant="small">UI/UX</Button>
            <div className="px-4 text-sm font-medium text-gray-500">
              Digital
            </div>
            <div className="px-4 text-sm font-medium text-gray-500">SMM</div>
            <div className="px-4 text-sm font-medium text-gray-500">Dev</div>
          </div>
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

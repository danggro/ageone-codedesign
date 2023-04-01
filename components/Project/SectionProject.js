import Button from "../Button";
import Container from "../Container";
import CardProject from "./CardProject";

export default function SectionProject() {
  return (
    <section
      id="project"
      className="bg-[url('/sec-project.png')] py-[100px] bg-gray-900"
    >
      <Container>
        <div className="w-10/12 mx-auto text-center ">
          <h1 className="text-display-lg font-bold text-white -tracking-[0.02em] leading-[76px]">
            Our Project Have Been <span className="text-primary-500">Done</span>
          </h1>
          <h4 className="px-20 mt-6 text-xl font-medium text-gray-200 mb-14">
            Take a look at some of our recent projects and see how we've helped
            other businesses elevate their brand and drive business growth.
          </h4>
          <div className="flex items-center p-2 mx-auto bg-white rounded-full w-fit">
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
        </div>
        <div className="flex mt-16 space-x-5">
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

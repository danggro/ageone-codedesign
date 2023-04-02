import Container from "../Container";
import CardServices from "./CardServices";

export default function SectionServices() {
  return (
    <section id="Services" className="py-[100px]">
      <Container>
        <h1 className="font-bold text-center text-display-lg">
          The Services We Offer{" "}
          <span className="text-primary-500">For You</span>
        </h1>
        <div className="mt-16 ">
          <CardServices num="01">UI/UX Design</CardServices>
          <CardServices num="02">Digital Marketing</CardServices>
          <CardServices num="03">Social Media Management</CardServices>
          <CardServices num="04">Development</CardServices>
        </div>
      </Container>
    </section>
  );
}

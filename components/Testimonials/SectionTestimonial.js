import { useState } from "react";
import Container from "../Container";
import CardTestimonials from "./CardTestimonials";
import mockTestimonials from "@/utils/Testimonials.json";
export default function SectionTestimonials() {
  const [testimonials, setTestimonials] = useState(mockTestimonials);
  return (
    <section className="h-[800px] overflow-y-scroll">
      <Container>
        <div className="mx-auto sm:flex sm:w-10/12 sm:space-x-12">
          <div className="sm:w-6/12">
            {testimonials.map((t) => {
              if (t.id < 5) {
                return (
                  <div key={t.id}>
                    <CardTestimonials
                      img={t.img}
                      username={t.username}
                      job={t.job}
                    >
                      {t.desc}
                    </CardTestimonials>
                  </div>
                );
              }
            })}
          </div>
          <div className="sm:w-6/12 sm:mt-[100px]">
            {testimonials.map((t) => {
              if (t.id > 4) {
                return (
                  <div key={t.id}>
                    <CardTestimonials
                      img={t.img}
                      username={t.username}
                      job={t.job}
                    >
                      {t.desc}
                    </CardTestimonials>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

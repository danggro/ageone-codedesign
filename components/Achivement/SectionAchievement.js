import Container from "../Container";
import ItemAchievement from "./ItemAchievement";

export default function SectionAchievement() {
  return (
    <section className="w-full bg-fit bg-[url('/sec-achievement.png')] sm:py-[80px] py-14">
      <Container>
        <h1 className="text-2xl font-medium sm:pr-10 sm:leading-[52px] sm:text-6xl">
          We are passionate about helping businesses grow and succeed in the
          digital age. We take pride in our work and strive to exceed your
          expectations every time.
        </h1>
        <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-6 p-8 mt-16 bg-primary-500 rounded-[20px]">
          <ItemAchievement title="Years of Experiences">10</ItemAchievement>
          <ItemAchievement title="Project Completed">666</ItemAchievement>
          <ItemAchievement title="Satisfied Client">555</ItemAchievement>
          <ItemAchievement title="Awards Achieved">10</ItemAchievement>
        </div>
      </Container>
    </section>
  );
}

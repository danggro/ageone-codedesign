import Container from "../Container";
import ItemAchievement from "./ItemAchievement";

export default function SectionAchievement() {
  return (
    <section className="w-full bg-cover bg-[url('/sec-achievement.png')] py-[80px]">
      <Container>
        <h1 className="pr-10 text-6xl font-medium">
          We are passionate about helping businesses grow and succeed in the
          digital age. We take pride in our work and strive to exceed your
          expectations every time.
        </h1>
        <div className="flex p-8 mt-16 bg-primary-500 rounded-[20px]">
          <ItemAchievement title="Years of Experiences">10</ItemAchievement>
          <ItemAchievement title="Project Completed">666</ItemAchievement>
          <ItemAchievement title="Satisfied Client">555</ItemAchievement>
          <ItemAchievement title="Awards Achieved">10</ItemAchievement>
        </div>
      </Container>
    </section>
  );
}

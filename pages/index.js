import Head from "next/head";

import { Inter } from "next/font/google";
import NavBar from "@/components/Navigation/NavBar";
import SectionHero from "@/components/Hero/SectionHero";
import SectionServices from "@/components/Services/SectionServices";
import SectionAchievement from "@/components/Achivement/SectionAchievement";
import SectionProject from "@/components/Project/SectionProject";
import PartnerProject from "@/components/Project/PartnerProject";
import SectionTestimonials from "@/components/Testimonials/SectionTestimonial";
import SectionFooter from "@/components/Footer/SectionFooter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="-z-10 w-full  sm:pb-[100px] pb-14 bg-gray-900 bg-bottom bg-cover sm:bg-[url('/OrnamentBox.png')] bg-[url('/ornament-mobile.png')]">
        <NavBar />
        <SectionHero />
      </header>
      <SectionServices />
      <SectionAchievement />
      <SectionProject />
      <PartnerProject />
      <SectionTestimonials />
      <SectionFooter />
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from "@/components/Container";
import NavBar from "@/components/Navigation/NavBar";
import SectionHero from "@/components/Hero/SectionHero";
import SectionServices from "@/components/Services/SectionServices";
import SectionAchievement from "@/components/Achivement/SectionAchievement";
import SectionProject from "@/components/Project/SectionProject";
import PartnerProject from "@/components/Project/PartnerProject";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="-z-10 w-screen pb-[100px] bg-gray-900 bg-cover bg-[url('/OrnamentBox.png')]">
        <NavBar />
        <SectionHero />
      </header>
      <SectionServices />
      <SectionAchievement />
      <SectionProject />
      <PartnerProject />
    </>
  );
}

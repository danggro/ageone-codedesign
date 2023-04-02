import Button from "../Button";
import Container from "../Container";
import NavLogo from "../Navigation/NavLogo";
import NavLogoMobile from "../Navigation/NavLogoMobile";
import FooterItem from "./FooterItem";
import FooterItemLink from "./FooterItemLink";

export default function SectionFooter() {
  return (
    <section className="sm:bg-[url('/footer.png')] bg-[url('/footer-mobile.png')] w-full bg-cover py-10">
      <Container>
        <div className="flex flex-col items-center justify-between mx-auto mb-10 sm:flex-row sm:w-10/12">
          <h2 className="sm:w-6/12 sm:text-6xl sm:text-left text-center text-2xl sm:leading-[52px] leading-8 -tracking-[0.02em] font-semibold text-white">
            Let&apos;s discuss and{" "}
            <span className="sm:hidden">
              <br />
            </span>{" "}
            bring your vision to life.
          </h2>
          <div className="hidden sm:block">
            <Button variant="large" arrow>
              Let&apos;s Talk
            </Button>
          </div>
          <div className="mt-6 sm:hidden">
            <Button variant="medium" arrow>
              Let&apos;s Talk
            </Button>
          </div>
        </div>
        <div className="sm:flex sm:pt-[100px] pt-8  pb-10 border-t border-b">
          <div className="sm:w-6/12">
            <div className="sm:hidden">
              <NavLogoMobile />
            </div>
            <div className="hidden sm:block">
              <NavLogo />
            </div>
            <h5 className="mt-4 mb-8 text-gray-200 sm:mt-6 sm:mb-10 sm:text-lg text-md sm:w-8/12">
              We&apos;re a team of experienced designers, developers, and
              marketers, passionate about delivering exceptional digital
              solutions.
            </h5>
            <h5 className="text-gray-200 sm:text-lg text-md">
              hello@agenone.com
            </h5>
          </div>
          <div className="flex flex-wrap mt-4 sm:justify-between sm:w-6/12 sm:flex-nowrap sm:mt-0 sm:pl-8 ">
            <FooterItem title="Menu">
              <FooterItemLink href="/">Home</FooterItemLink>
              <FooterItemLink href="/#Services">Services</FooterItemLink>
              <FooterItemLink href="/#About">About</FooterItemLink>
              <FooterItemLink href="/#Project">Project</FooterItemLink>
              <FooterItemLink href="/#Contact">Contact</FooterItemLink>
            </FooterItem>
            <FooterItem title="Support">
              <FooterItemLink href="/">FAQ</FooterItemLink>
              <FooterItemLink href="/">Privacy Policy</FooterItemLink>
              <FooterItemLink href="/">Terms of Service</FooterItemLink>
            </FooterItem>
            <FooterItem title="Social Media">
              <FooterItemLink href="http://www.linkedin.com">
                Linked In
              </FooterItemLink>
              <FooterItemLink href="http://www.twitter.com">
                Twitter
              </FooterItemLink>
              <FooterItemLink href="http://www.instagram.com">
                Instagram
              </FooterItemLink>
              <FooterItemLink href="http://www.dribble.com">
                Driblle
              </FooterItemLink>
              <FooterItemLink href="http://www.behance.com">
                Behance
              </FooterItemLink>
            </FooterItem>
          </div>
        </div>
        <h5 className="mt-10 text-xs text-center text-gray-200 sm:text-lg">
          Copyright &copy; 2023 by Agenone. All rights reserved.
        </h5>
      </Container>
    </section>
  );
}

import Button from "../Button";
import Container from "../Container";
import NavLogo from "../Navigation/NavLogo";
import FooterItem from "./FooterItem";
import FooterItemLink from "./FooterItemLink";

export default function SectionFooter() {
  return (
    <section className="bg-[url('/footer.png')] w-full bg-cover py-10">
      <Container>
        <div className="flex items-center justify-between w-10/12 mx-auto mb-10">
          <h2 className="w-6/12 text-6xl leading-[52px] -tracking-[0.02em] font-semibold text-white">
            Let&apos;s discuss and bring your vision to life.
          </h2>
          <Button variant="large" arrow>
            Let&apos;s Talk
          </Button>
        </div>
        <div className="flex pt-[100px] pb-10 border-t border-b">
          <div className="w-6/12">
            <NavLogo />
            <h5 className="w-8/12 mt-6 mb-10 text-lg text-gray-200">
              We're a team of experienced designers, developers, and marketers,
              passionate about delivering exceptional digital solutions.
            </h5>
            <h5 className="text-lg text-gray-200">hello@agenone.com</h5>
          </div>
          <div className="flex justify-between w-6/12 pl-8">
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
        <h5 className="mt-10 text-lg text-center text-gray-200">
          Copyright &copy; 2023 by Agenone. All rights reserved.
        </h5>
      </Container>
    </section>
  );
}

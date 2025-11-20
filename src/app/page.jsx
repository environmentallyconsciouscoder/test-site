import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-white">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="text-4xl tracking-tight [text-wrap:balance] sm:text-6xl">
            RetroSet is building the digital infrastructure powering the retrofit revolution
          </h1>
          {/* <p className="mt-6 text-xl text-neutral-600">
            We empower innovators and creators to build consciously — reducing carbon impact while amplifying collective good.
          </p> */}
        </FadeIn>
      </Container>
      {/* <Clients /> */}
      {/* <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials> */}
      {/* <Services /> */}
      {/* <ContactSection /> */}
    </main>
  );
}

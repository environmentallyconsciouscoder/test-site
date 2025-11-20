import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import DigitsContent from "./Digits";


const clients = [
  // ["Phobia", logoPhobiaLight],
  // ["Family Fund", logoFamilyFund],
  // ["Unseal", logoUnseal],
  // ["Mail Smirk", logoMailSmirk],
  // ["Home Work", logoHomeWork],
  // ["Green Life", logoGreenLife],
  // ["Bright Path", logoBrightPath],
  // ["North Adventures", logoNorthAdventures],
];

const Metrics = [
  ["Green Workshops", 48],
  ["Green Skills", 48],
  ["Green Jobs ", 20],
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-[#094067] py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Aspirations
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>

        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {Metrics.map(([activity, target]) => (
              <li key={activity}>
                <FadeIn>
                  <DigitsContent num={target} />
                  <p className="mt-5 text-sm text-neutral-500">{activity}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>

        {/* <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger> */}
      </Container>
    </div>
  );
};

export default Clients;

import { navigation } from "@/constants";
import Link from "next/link";

const FooterNavigation = () => {


  console.log("navigation[1", navigation[1])

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">

          <li key={navigation[1].title}>
            <div className="font-display text-sm font-semibold tracking-wider text-white">
              {navigation[1].title}
            </div>
            <ul role="list" className="mt-4 text-sm text-white">
              {navigation[1].links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    href={link.href}
                      target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

        {/* {navigation.map((item) => (
          <li key={item.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-white">
              {item.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-white">
              {item.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    href={link.href}
                      target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))} */}
      </ul>
    </nav>
  );
};

export default FooterNavigation;

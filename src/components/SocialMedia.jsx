import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
  BsInstagram
} from "react-icons/bs";

export const SocialMediaProfiles = [
  // {
  //   title: "Youtube",
  //   href: "https://www.youtube.com/watch?v=eAswnbWptBM",
  //   icon: BsYoutube,
  // },
  // { title: "GitHub", href: "https://github.com/chrhi", icon: BsGithub },
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581365093150&locale=en_GB",
    icon: BsFacebook,
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/company/retroset-ltd/?viewAsMember=true",
    icon: BsLinkedin,
  },
    {
    title: "Instagram",
    href: "https://www.instagram.com/retroset.app/",
    icon: BsInstagram,
  },
    {
    title: "X",
    href: "https://x.com/retroset_app",
    icon: BsTwitter,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10 ",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            target="_blank"
              rel="noopener noreferrer"
            aria-label={item.title}
            className={clsx(
              "transition ",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;

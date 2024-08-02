import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/harsh0201" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/harsh0201/" },
  ///{ icon: <FaYoutube />, path: "" },
  {
    icon: <FaTwitter />,
    path: "https://x.com/Harsh_0201?t=davcKx6QDMuW1V93tRu-3g&s=08",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

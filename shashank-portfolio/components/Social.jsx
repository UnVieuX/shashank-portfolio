import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/UnVieuX" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/-shashanksingh-/",
  },
  {
    icon: <FaEnvelope />,
    path: "mailto:shashank.singh751@gmail.com", // Email link
  },
  //   { icon: <FaYoutube />, path: "" },
  //   { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconsStyles}
            target={item.path.startsWith("mailto:") ? "_self" : "_blank"}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

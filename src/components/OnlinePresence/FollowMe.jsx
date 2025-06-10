import "../Stacks/myStacks.css";
import {
  TbUserFilled,
  TbBrandInstagramFilled,
  TbBrandXFilled,
  TbBrandGithubFilled,
  TbBrandLinkedinFilled,
} from "react-icons/tb";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/samcgo.sanchez/",
    icon: <TbBrandInstagramFilled className="stacks-icon" />,
  },
  {
    name: "Twitter",
    url: "https://x.com/Progreso_Dev",
    icon: <TbBrandXFilled className="stacks-icon" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/samuel-camargo-dev/",
    icon: <TbBrandLinkedinFilled className="stacks-icon" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/SamuelCam14",
    icon: <TbBrandGithubFilled className="stacks-icon" />,
  },
];

export const FollowMe = () => {
  return (
    <div className="flex flex-col w-full h-full items-center text-center py-5 px-8">
      <div className="h-fit">
        <div className="flex gap-1 items-center justify-center">
          <TbUserFilled className="h-5 w-5 text-rose-300/90" />
          <h2 className="text-zinc-400">Follow Me</h2>
        </div>
        <p className="text-zinc-200 font-medium text-xl mt-1">
          Online Presence
        </p>
      </div>

      <div className="flex flex-col gap-2.5 h-full justify-center w-full">
        <ul className="flex flex-col w-full gap-2.5">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="stacks-card text-zinc-400 font-normal hover:scale-105 transition-transform duration-200"
              >
                <div className="icon-container p-2.5">{link.icon}</div>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

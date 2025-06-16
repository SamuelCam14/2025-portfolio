import "../Stacks/myStacks.css";
import {
  TbHeartHandshake,
  TbSourceCode,
  TbMatrix,
  TbWriting,
  TbDetails,
  TbBookFilled,
} from "react-icons/tb";

const socialLinks = [
  {
    name: "Clean Code",
    icon: <TbSourceCode className="w-5 h-5" />,
  },
  {
    name: "Team Player",
    icon: <TbHeartHandshake className="w-5 h-5" />,
  },
  {
    name: "Problem Solver",
    icon: <TbMatrix className="w-5 h-5" />,
  },
  {
    name: "Always Learning",
    icon: <TbWriting className="w-5 h-5" />,
  },
  {
    name: "Details Matter",
    icon: <TbDetails className="w-5 h-5" />,
  },
];

export const WhoAmI = () => {
  return (
    <div className="flex flex-col w-full h-full items-center text-center py-5 px-8">
      <div className="h-fit">
        <div className="flex gap-1 items-center justify-center">
          <TbBookFilled className="h-5 w-5 text-rose-300/90" />
          <h2 className="text-zinc-400">Who Am I</h2>
        </div>
        <p className="text-zinc-200 font-medium text-xl mt-1">My Identity</p>
      </div>

      <div className="flex flex-col gap-2.5 h-full justify-center w-full">
        <ul className="flex flex-col w-full gap-2.5">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <div className="stacks-card text-zinc-400 font-normal hover:scale-105 transition-transform duration-200">
                <div className="icon-container p-2">{link.icon}</div>
                {link.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

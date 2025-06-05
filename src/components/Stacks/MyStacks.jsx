import { FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { HiSquare2Stack } from "react-icons/hi2";
import "./myStacks.css";

export const MyStacks = () => {
  return (
    <div className="flex flex-col w-full h-full items-center text-center p-5">
      <div className="h-fit">
        <div className="flex gap-1 items-center justify-center">
          <HiSquare2Stack className="h-5 w-5 text-orange-400/70" />
          <h2 className="text-zinc-400">My Stacks</h2>
        </div>
        <p className="text-zinc-200 font-medium text-xl">Tech Arsenal</p>
      </div>

      <div className="flex flex-col gap-2 h-full justify-center w-full">
        <ul className="flex w-full gap-2">
          <li className="stacks-card">
            <div className="icon-container">
              <FaReact className="stacks-icon" />
            </div>
            React
          </li>
          <li className="stacks-card">
            <div className="icon-container">
              <SiTailwindcss className="stacks-icon" />
            </div>
            TailwindCSS
          </li>
        </ul>
        <ul className="flex w-full gap-2">
          <li className="stacks-card">
            <div className="icon-container">
              <AiOutlineJavaScript className="stacks-icon" />
            </div>
            JavaScript
          </li>
          <li className="stacks-card">
            <div className="icon-container">
              <FaNode className="stacks-icon" />
            </div>
            NodeJS
          </li>
        </ul>
      </div>
    </div>
  );
};

import { FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { HiSquare2Stack } from "react-icons/hi2";
import "./myStacks.css";

export const MyStacks = () => {
  return (
    <div className="flex flex-col w-full h-full items-center text-center p-2 md:py-5 md:px-8 gap-4 md:gap-0">
      <div className="h-fit">
        <div className="flex gap-1 items-center justify-center">
          <HiSquare2Stack className="h-5 w-5 text-rose-300/90" />
          <h2 className="text-zinc-400">My Stacks</h2>
        </div>
        <p className="text-zinc-200 font-medium text-xl mt-1">Tech Arsenal</p>
      </div>

      <div className="flex flex-col gap-2.5 h-full justify-center w-full">
        <ul className="flex w-full gap-2.5">
          <li className="stacks-card">
            <div className="icon-container">
              <FaReact className="stacks-icon text-zinc-400/90" />
            </div>
            React
          </li>
          <li className="stacks-card">
            <div className="icon-container">
              <SiTailwindcss className="stacks-icon text-zinc-400/90" />
            </div>
            TailwindCSS
          </li>
        </ul>
        <ul className="flex w-full gap-2.5">
          <li className="stacks-card">
            <div className="icon-container">
              <AiOutlineJavaScript className="stacks-icon text-zinc-400/90" />
            </div>
            JavaScript
          </li>
          <li className="stacks-card">
            <div className="icon-container">
              <FaNode className="stacks-icon text-zinc-400/90" />
            </div>
            NodeJS
          </li>
        </ul>
      </div>
    </div>
  );
};

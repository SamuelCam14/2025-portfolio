import { FaDotCircle } from "react-icons/fa";
import {
  TbDownload,
  TbWorldPin,
  TbLanguage,
  TbBook2,
  TbWorldCode,
  TbBrandTelegram,
  TbBrandWhatsapp,
  TbBrandGithub,
} from "react-icons/tb";
import { ShinyText } from "../Ui/ShinyText";
import "./aboutMe.css";
import RotatingText from "../Ui/RotatingText";

const info = [
  { name: "Chihuahua, MX", icon: <TbWorldPin className="text-rose-300/90" /> },
  {
    name: "Spanish (Native)",
    icon: <TbLanguage className="text-rose-300/90" />,
  },
  {
    name: "English B1",
    icon: <TbLanguage className="text-rose-300/90" />,
  },
  { name: "Web Developer", icon: <TbWorldCode className="text-rose-300/90" /> },
  {
    name: "Computer Science Engineer",
    icon: <TbBook2 className="text-rose-300/90" />,
  },
];

export const AboutMe = () => {
  return (
    <section className="flex flex-col w-full h-full px-2 py-2 md:px-5 justify-center gap-2 md:gap-6">
      {/* Name Section */}
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/profilepic.JPG"
            alt="Foto de perfil de Samuel Camargo"
            className="w-32 h-full rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-2">
            <p className="bg-zinc-800/50 text-zinc-400 flex items-center w-fit gap-2 px-1.5 py-0.5 md:px-4 md:py-1 rounded-2xl border-1 border-zinc-800/80 text-sm md:text-base font-normal">
              <FaDotCircle className="text-green-500" />
              Available To Work
            </p>
            <h1 className="text-xl md:text-3xl font-stretch-95%% font-rubik font-medium tracking-tighter">
              Samuel Camargo
            </h1>
            <div className="flex items-center gap-2">
              <h2 className="text-zinc-400 text-sm md:text-base">Im a </h2>
              <RotatingText
                texts={[
                  "Problem Solver",
                  "Frontend Architect",
                  "Code Crafter",
                  "Web Developer",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-rose-300/90 text-zinc-800 font-medium overflow-hidden py-0.5 justify-center item-center rounded-xl text-sm md:text-base"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={5000}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <button className="flex items-center gap-2 text-zinc-300 font-medium cursor-pointer">
            Resume{" "}
            <span className="bg-zinc-800/50 p-2.5 rounded-xl border-1 border-zinc-800/80 hover:scale-110 transition-transform duration-200">
              <TbDownload className="h-6 w-6" />
            </span>
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className="flex bg-zinc-900/90 p-2 md:p-4 rounded-2xl border-1 border-zinc-800/30">
        <ul className="flex gap-2 flex-wrap">
          {info.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-2 text-zinc-300 text-sm md:text-base bg-zinc-800/50 px-2 md:px-4 py-0.5 rounded-full border-1 border-zinc-800/80"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-2 w-full">
        <a href="#" className="cta-btn">
          <TbBrandGithub className="text-rose-300/90 h-5 w-5" />
          <ShinyText
            text="My GitHub"
            disabled={false}
            speed={3}
            className="font-medium"
          />
        </a>
        <a href="#" className="cta-btn">
          <TbBrandWhatsapp className="text-rose-300/90 h-5 w-5" />
          <ShinyText
            text="My WhatsApp"
            disabled={false}
            speed={3}
            className="font-medium"
          />
        </a>
      </div>
    </section>
  );
};

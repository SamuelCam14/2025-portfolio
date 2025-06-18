import { TbBriefcaseFilled } from "react-icons/tb";
import { useEffect, useRef } from "react";

const projects = [
  { name: "Dream High", image: "/images/dreamhigh.png" },
  { name: "NBA Kronz", image: "/images/NbaKronz.png" },
  { name: "Skull", image: "/images/skull.png" },
];

export const Projects = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-center text-center py-2 md:py-5 px-0 relative">
      <div className="h-fit mb-2 md:mb-8">
        <div className="flex gap-1 items-center justify-center">
          <TbBriefcaseFilled className="h-5 w-5 text-rose-300/90" />
          <h2 className="text-zinc-400">Projects</h2>
        </div>
        <p className="text-zinc-200 font-medium text-xl mt-1">Works Gallery</p>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <ul
          ref={logosRef}
          className="flex items-center mb-5 md:mb-0 justify-center md:justify-start [&_li]:mx-1 [&_img]:max-w-none animate-[infinite-scroll_20s_linear_infinite]"
        >
          {projects.map((project) => (
            <li key={project.name}>
              <img
                src={project.image}
                alt={project.name}
                className="h-30 w-56 object-cover rounded-2xl"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-zinc-800 rounded-2xl p-1 md:p-1.5 absolute bottom-2 md:bottom-5">
        <button className="bg-rose-300/90 hover:bg-rose-300 text-zinc-800 font-medium px-12 py-2 md:px-12 md:py-3 rounded-xl">
          View Works
        </button>
      </div>
    </div>
  );
};

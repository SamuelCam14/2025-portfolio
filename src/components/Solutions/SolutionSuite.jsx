import { BsFillFolderFill } from "react-icons/bs";
import { useEffect, useRef } from "react";
import {
  TbCodeDots,
  TbColorSwatch,
  TbDatabaseSearch,
  TbSeo,
  TbDeviceAnalytics,
  TbBrandMeta,
} from "react-icons/tb";
import "./solutionSuite.css";

const solutions = [
  { name: "Web Development", icon: <TbCodeDots /> },
  { name: "React Frontend", icon: <TbColorSwatch /> },
  { name: "Node Backend", icon: <TbDatabaseSearch /> },
];

const additionalSolutions = [
  { name: "SEO Optimization", icon: <TbSeo /> },
  { name: "Analytics Integration", icon: <TbDeviceAnalytics /> },
  { name: "Social Media Marketing", icon: <TbBrandMeta /> },
];

export const SolutionSuite = () => {
  const logosRef = useRef(null);
  const additionalLogosRef = useRef(null);

  useEffect(() => {
    // Setup first scroll
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }

    // Setup second scroll
    const additionalUl = additionalLogosRef.current;
    if (additionalUl) {
      additionalUl.insertAdjacentHTML("afterend", additionalUl.outerHTML);
      additionalUl.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-center text-center py-5 px-0">
      <div className="h-fit">
        <div className="flex gap-1 items-center justify-center">
          <BsFillFolderFill className="h-5 w-5 text-rose-300/90" />
          <h2 className="text-zinc-400">Services</h2>
        </div>
        <p className="text-zinc-200 font-medium text-xl mt-1">
          Solutions Suite
        </p>
      </div>

      <div className="h-full w-full flex flex-col items-center justify-center">
        {/* First scroll - opposite direction */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden mb-3">
          <ul
            ref={additionalLogosRef}
            className="flex items-center justify-center md:justify-start [&_li]:mx-1.5 [&_img]:max-w-none [animation:var(--animate-infinite-scroll-reverse)]"
          >
            {additionalSolutions.map((solution) => (
              <li key={solution.name} className="solution-suite">
                <span className="text-rose-300/90 text-xl">
                  {solution.icon}
                </span>
                <span className="text-zinc-200">{solution.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Second scroll - original direction */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul
            ref={logosRef}
            className="flex items-center justify-center md:justify-start [&_li]:mx-1.5 [&_img]:max-w-none [animation:var(--animate-infinite-scroll)]"
          >
            {solutions.map((solution) => (
              <li key={solution.name} className="solution-suite">
                <span className="text-rose-300/90 text-xl">
                  {solution.icon}
                </span>
                <span className="text-zinc-200">{solution.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

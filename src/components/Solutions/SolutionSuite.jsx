import { BsFillFolderFill } from "react-icons/bs";
import { useEffect, useRef } from "react";

const solutions = [
  { name: "Web Development", image: "/images/dreamhigh.png" },
  { name: "React Frontend", image: "/images/NbaKronz.png" },
  { name: "Node Backend", image: "/images/skull.png" },
];

export const SolutionSuite = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-center text-center py-5 px-0 relative">
      <div className="h-fit mb-8">
        <div className="flex gap-1 items-center justify-center">
          <BsFillFolderFill className="h-5 w-5 text-rose-300/90" />
          <h2 className="text-zinc-400">Services</h2>
        </div>
        <p className="text-zinc-200 font-medium text-xl mt-1">
          Solutions Suite
        </p>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <ul
          ref={logosRef}
          className="flex items-center justify-center md:justify-start [&_li]:mx-1 [&_img]:max-w-none animate-[infinite-scroll_20s_linear_infinite]"
        >
          {solutions.map((solution) => (
            <li key={solution.name}>
              <img
                src={solution.image}
                alt={solution.name}
                className="h-30 w-56 object-cover rounded-2xl"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-zinc-800 rounded-2xl p-1.5 absolute bottom-5">
        <button className="bg-rose-300/90 hover:bg-rose-300 text-zinc-800 font-medium px-12 py-3 rounded-xl">
          View Works
        </button>
      </div>
    </div>
  );
};
